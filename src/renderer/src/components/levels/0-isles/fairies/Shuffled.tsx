import { useGeneralFairy } from '@renderer/hooks/isles'
import { useShuffleFairies } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import FairyPool from '@renderer/components/pools/Fairies'

const Shuffled: React.FC = () => {
  const fairy = useGeneralFairy()
  if (!useShuffleFairies()) {
    return null
  }
  return (
    <FairyPool>
      <IslesCheck id={280} name="Isles Fairy Location #1" canGetLogic={fairy} />
      <IslesCheck id={281} name="Isles Fairy Location #2" canGetLogic={fairy} />
      <IslesCheck id={282} name="Isles Fairy Location #3" canGetLogic={fairy} />
      <IslesCheck id={283} name="Isles Fairy Location #4" canGetLogic={fairy} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
