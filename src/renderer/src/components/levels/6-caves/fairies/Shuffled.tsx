import FairyPool from '@renderer/components/pools/Fairies'
import { useGenericFairy } from '@renderer/hooks/caves'
import { useShuffleFairies } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGenericFairy()
  return (
    <FairyPool>
      <CavesCheck id={6280} name="Caves Fairy Location #1" canGetLogic={thing} />
      <CavesCheck id={6281} name="Caves Fairy Location #2" canGetLogic={thing} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
