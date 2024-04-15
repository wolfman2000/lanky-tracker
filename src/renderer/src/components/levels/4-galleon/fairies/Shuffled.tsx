import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <FairyPool>
      <GalleonCheck id={4280} name="Galleon Fairy Location #1" canGetLogic={thing} />
      <GalleonCheck id={4281} name="Galleon Fairy Location #2" canGetLogic={thing} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
