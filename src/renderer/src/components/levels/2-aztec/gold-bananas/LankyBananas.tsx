import { useAztec5DoorTemple, useAztecLlamaTemple, useAztecTinyTemple } from '@renderer/hooks/aztec'
import {
  useAnyGun,
  useDive,
  useGrape,
  useLanky,
  useSlam,
  useStand,
  useTrombone,
  useTwirl
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../AztecCheck'

const LankyBananas: React.FC = () => {
  const templeTiny = useAztecTinyTemple()
  const aztec5Door = useAztec5DoorTemple()
  const llama = useAztecLlamaTemple()
  const canSlam = useSlam()
  const lanky = useLanky()
  const trombone = useTrombone()
  const stand = useStand()
  const grape = useGrape()
  const dive = useDive()
  const twirl = useTwirl()
  const anyGun = useAnyGun()
  return (
    <>
      <AztecCheck
        id={2020}
        name="Aztec Lanky Vulture"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && dive && canSlam && grape}
        canGetBreak={logicBreak(templeTiny) && dive && canSlam && lanky && anyGun}
      />
      <AztecCheck
        id={2021}
        name="Aztec Lanky 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && grape}
        canGetBreak={logicBreak(aztec5Door) && grape}
      />
      <AztecCheck
        id={2022}
        name="Aztec Lanky Llama Temple Barrel"
        region="Llama Temple"
        canGetLogic={llama.in && trombone && stand}
        canGetBreak={logicBreak(llama) && trombone && (stand || twirl)}
      />
      <AztecCheck
        id={2023}
        name="Aztec Lanky Matching Game"
        region="Llama Temple"
        canGetLogic={llama.in && grape}
        canGetBreak={logicBreak(llama) && grape}
      />
    </>
  )
}

export default LankyBananas
