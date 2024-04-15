import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyMinecartGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Minecart: React.FC = () => {
  const mineGb = useDiddyMinecartGb()
  return (
    <ToughGoldenBanana>
      <JapesCheck
        id={1013}
        name="Japes Diddy Minecart"
        region="Japes Caves And Mines"
        canGetLogic={mineGb.in}
        canGetBreak={mineGb.out}
      />
    </ToughGoldenBanana>
  )
}
export default Minecart
