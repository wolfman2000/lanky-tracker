import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useDiddy5DoorGb,
  useDiddyFreeTinyGb,
  useDiddyGongGb,
  useDiddyVultureGb
} from '@renderer/hooks/aztec'
import AztecCheck from '../AztecCheck'

const DiddyBananas: React.FC = () => {
  const freeGb = useDiddyFreeTinyGb()
  const gongGb = useDiddyGongGb()
  const vultureGb = useDiddyVultureGb()
  const doorGb = useDiddy5DoorGb()
  return (
    <>
      <AztecCheck
        id={2010}
        name="Aztec Diddy Free Tiny"
        region="Tiny Temple"
        canGetLogic={freeGb.in}
        canGetBreak={freeGb.out}
      />
      <AztecCheck
        id={2011}
        name="Aztec Diddy Ram Gongs"
        region="Aztec Oasis And Totem Area"
        canGetLogic={gongGb.in}
        canGetBreak={gongGb.out}
      />
      <ToughGoldenBanana>
        <AztecCheck
          id={2012}
          name="Aztec Diddy Vulture Race"
          region="Aztec Oasis And Totem Area"
          canGetLogic={vultureGb.in}
          canGetBreak={vultureGb.out}
        />
      </ToughGoldenBanana>
      <AztecCheck
        id={2013}
        name="Aztec Diddy 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={doorGb.in}
        canGetBreak={doorGb.out}
      />
    </>
  )
}

export default DiddyBananas
