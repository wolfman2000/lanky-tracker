import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/factory'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <FairyPool>
      <FactoryCheck id={3280} name="Factory Fairy Location #1" canGetLogic={thing} />
      <FactoryCheck id={3281} name="Factory Fairy Location #2" canGetLogic={thing} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
