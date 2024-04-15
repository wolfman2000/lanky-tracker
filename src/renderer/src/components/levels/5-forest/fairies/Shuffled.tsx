import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <FairyPool>
      <ForestCheck id={5280} name="Forest Fairy Location #1" canGetLogic={thing} />
      <ForestCheck id={5281} name="Forest Fairy Location #2" canGetLogic={thing} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
