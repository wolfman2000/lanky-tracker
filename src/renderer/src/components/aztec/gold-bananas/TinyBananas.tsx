import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecLlamaLava,
  useAztecTinyTemple
} from '@renderer/hooks/aztec'
import { useCharge, useDive, useFeather, useMini, useRocket, useSax } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../AztecCheck'

const TinyBananas: React.FC = () => {
  const templeTiny = useAztecTinyTemple()
  const aztec5Door = useAztec5DoorTemple()
  const aztecBack = useAztecBack()
  const mini = useMini()
  const sax = useSax()
  const feather = useFeather()
  const dive = useDive()
  const charge = useCharge()
  const rocket = useRocket()
  const lava = useAztecLlamaLava()
  return (
    <>
      <AztecCheck
        id={2030}
        name="Aztec Tiny Klaptrap Room"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && mini && dive}
        canGetBreak={logicBreak(templeTiny) && mini && dive}
      />
      <AztecCheck
        id={2031}
        name="Aztec Tiny 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && feather}
        canGetBreak={logicBreak(aztec5Door) && feather}
      />
      <ToughGoldenBanana>
        <AztecCheck
          id={2032}
          name="Aztec Tiny Beetle Race"
          region="Aztec Oasis And Totem Area"
          canGetLogic={aztecBack.in && charge && rocket && mini && sax}
          canGetBreak={logicBreak(aztecBack) && charge && rocket && mini && sax}
        />
      </ToughGoldenBanana>
      <AztecCheck
        id={2033}
        name="Aztec Tiny Llama Temple"
        region="Llama Temple"
        canGetLogic={lava.in}
        canGetBreak={logicBreak(lava)}
      />
    </>
  )
}

export default TinyBananas
