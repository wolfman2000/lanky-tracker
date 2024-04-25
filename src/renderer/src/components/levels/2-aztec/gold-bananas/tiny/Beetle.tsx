import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyBeetleGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const BeetleRace: React.FC = () => {
  const beetleGb = useTinyBeetleGb()
  return (
    <ToughGoldenBanana>
      <AztecCheck
        id={2032}
        name="Aztec Tiny Beetle Race"
        region="Aztec Oasis And Totem Area"
        canGetLogic={beetleGb.in}
        canGetBreak={beetleGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default BeetleRace
