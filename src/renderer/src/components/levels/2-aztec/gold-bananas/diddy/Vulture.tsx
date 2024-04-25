import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyVultureGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VultureRace: React.FC = () => {
  const vultureGb = useDiddyVultureGb()
  return (
    <ToughGoldenBanana>
      <AztecCheck
        id={2012}
        name="Aztec Diddy Vulture Race"
        region="Aztec Oasis And Totem Area"
        canGetLogic={vultureGb.in}
        canGetBreak={vultureGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default VultureRace
