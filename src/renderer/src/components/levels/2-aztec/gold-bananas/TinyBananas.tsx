import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useTiny5DoorGb,
  useTinyBeetleGb,
  useTinyKlaptrapGb,
  useTinyLavaGb
} from '@renderer/hooks/aztec'
import AztecCheck from '../AztecCheck'

const TinyBananas: React.FC = () => {
  const klaptrapGb = useTinyKlaptrapGb()
  const doorGb = useTiny5DoorGb()
  const beetleGb = useTinyBeetleGb()
  const lavaGb = useTinyLavaGb()
  return (
    <>
      <AztecCheck
        id={2030}
        name="Aztec Tiny Klaptrap Room"
        region="Tiny Temple"
        canGetLogic={klaptrapGb.in}
        canGetBreak={klaptrapGb.out}
      />
      <AztecCheck
        id={2031}
        name="Aztec Tiny 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={doorGb.in}
        canGetBreak={doorGb.out}
      />
      <ToughGoldenBanana>
        <AztecCheck
          id={2032}
          name="Aztec Tiny Beetle Race"
          region="Aztec Oasis And Totem Area"
          canGetLogic={beetleGb.in}
          canGetBreak={beetleGb.out}
        />
      </ToughGoldenBanana>
      <AztecCheck
        id={2033}
        name="Aztec Tiny Llama Temple Lava Pedestals"
        region="Llama Temple"
        canGetLogic={lavaGb.in}
        canGetBreak={lavaGb.out}
      />
    </>
  )
}

export default TinyBananas
