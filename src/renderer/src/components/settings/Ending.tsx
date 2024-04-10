import { useCanDeactivateHelm, useCanFightRool } from '@renderer/hooks/helm'
import EndingSelector from './EndingSelector'

const Ending: React.FC = () => {
  const helmLogic = useCanDeactivateHelm()
  const roolLogic = useCanFightRool()

  return (
    <section className="ending">
      <div>
        <span>Helm</span>
        <span className={helmLogic ? 'available' : 'not-available'}>⬤</span>
      </div>
      <section>
        <EndingSelector rootKey="helm1" />
        <EndingSelector rootKey="helm2" />
        <EndingSelector rootKey="helm3" />
        <EndingSelector rootKey="helm4" />
        <EndingSelector rootKey="helm5" />
      </section>
      <div>
        <span>K. Rool</span>
        <span
          className={roolLogic.in ? 'available' : roolLogic.out ? 'logic-break' : 'not-available'}
        >
          ⬤
        </span>
      </div>
      <section>
        <EndingSelector rootKey="rool1" />
        <EndingSelector rootKey="rool2" />
        <EndingSelector rootKey="rool3" />
        <EndingSelector rootKey="rool4" />
        <EndingSelector rootKey="rool5" />
      </section>
    </section>
  )
}

export default Ending
