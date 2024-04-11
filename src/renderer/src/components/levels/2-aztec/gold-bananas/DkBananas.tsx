import { useDk5DoorGb, useDkBlastGb, useDkFreeLankyGb, useDkTunnelGb } from '@renderer/hooks/aztec'
import AztecCheck from '../AztecCheck'

const DkBananas: React.FC = () => {
  const blastGb = useDkBlastGb()
  const tunnelGb = useDkTunnelGb()
  const doorGb = useDk5DoorGb()
  const freeGb = useDkFreeLankyGb()
  return (
    <>
      <AztecCheck
        id={2001}
        name="Aztec DK Free Llama"
        region="Aztec Oasis And Totem Area"
        canGetLogic={blastGb.in}
        canGetBreak={blastGb.out}
      />
      <AztecCheck
        id={2002}
        name="Aztec DK Quicksand Cave"
        region="Various Aztec Tunnels"
        canGetLogic={tunnelGb.in}
        canGetBreak={tunnelGb.out}
      />
      <AztecCheck
        id={2003}
        name="Aztec DK 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={doorGb.in}
        canGetBreak={doorGb.out}
      />
      <AztecCheck
        id={2004}
        name="Aztec DK Free Lanky"
        region="Llama Temple"
        canGetLogic={freeGb.in}
        canGetBreak={freeGb.out}
      />
    </>
  )
}

export default DkBananas
