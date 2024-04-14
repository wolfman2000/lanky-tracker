import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/castle/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../CastleCheck'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CastleCheck
      id={7100}
      name="Castle Donkey Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
