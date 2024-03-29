import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecBackTunnel,
  useAztecLlamaTemple
} from '@renderer/hooks/aztec'
import { useBlast, useCoconut, useDive, useStrong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../AztecCheck'

const DkBananas: React.FC = () => {
  const aztecBack = useAztecBack()
  const aztecTunnel = useAztecBackTunnel()
  const aztec5Door = useAztec5DoorTemple()
  const llama = useAztecLlamaTemple()
  const dive = useDive()
  const strong = useStrong()
  const coconut = useCoconut()
  const blast = useBlast()
  return (
    <>
      <AztecCheck
        id={2001}
        name="Aztec DK Free Llama"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && blast}
        canGetBreak={logicBreak(aztecBack) && blast}
      />
      <AztecCheck
        id={2002}
        name="Aztec DK Quicksand Cave"
        region="Various Aztec Tunnels"
        canGetLogic={aztecTunnel.in && strong}
        canGetBreak={logicBreak(aztecTunnel)}
      />
      <AztecCheck
        id={2003}
        name="Aztec DK 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && coconut}
        canGetBreak={logicBreak(aztec5Door) && coconut}
      />
      <AztecCheck
        id={2004}
        name="Aztec DK Free Lanky"
        region="Llama Temple"
        canGetLogic={llama.in && dive}
        canGetBreak={logicBreak(llama) && dive}
      />
    </>
  )
}

export default DkBananas
