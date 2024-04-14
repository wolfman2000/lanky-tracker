import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useLlamaFairy, useTinyFairy } from '@renderer/hooks/aztec'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const llama = useLlamaFairy()
  const door = useTinyFairy()
  return (
    <>
      <AztecCheck
        id={2080}
        name="Aztec Fairy (Llama Temple)"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={llama.out}
      />
      <AztecCheck
        id={2081}
        name="Aztec Fairy (Tiny 5-Door Temple)"
        region="5 Door Temple"
        canGetLogic={door.in}
        canGetBreak={door.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const fairyLogic = useGeneralFairy()

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
