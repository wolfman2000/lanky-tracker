import FairyPool from '@renderer/components/pools/Fairies'
import {
  useAztec5DoorTemple,
  useAztecLlamaTemple,
  useAztecShuffledFairyLogic
} from '@renderer/hooks/aztec'
import { useCamera, useFeather, useMini } from '@renderer/hooks/kongs'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const camera = useCamera()
  const llama = useAztecLlamaTemple()
  const aztec5Door = useAztec5DoorTemple()
  const feather = useFeather()
  const mini = useMini()
  return (
    <>
      <AztecCheck
        id={2080}
        name="Aztec Fairy Llama Temple"
        region="Llama Temple"
        canGetLogic={llama.in && camera}
        canGetBreak={llama.out && camera}
      />
      <AztecCheck
        id={2081}
        name="Aztec Fairy 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && feather && mini && camera}
        canGetBreak={aztec5Door.out && feather && mini && camera}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const fairyLogic = useAztecShuffledFairyLogic()

  return (
    <>
      <AztecCheck
        id={2280}
        name="Aztec Fairy Location #1"
        canGetLogic={fairyLogic.in}
        canGetBreak={fairyLogic.out}
      />
      <AztecCheck
        id={2281}
        name="Aztec Fairy Location #2"
        canGetLogic={fairyLogic.in}
        canGetBreak={fairyLogic.out}
      />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
