import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/castle'
import { useShuffleFairies } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
  const fairy = useGeneralFairy()
  return (
    <FairyPool>
      <CastleCheck id={7280} name="Castle Fairy Location #1" canGetLogic={fairy} />
      <CastleCheck id={7281} name="Castle Fairy Location #2" canGetLogic={fairy} />
    </FairyPool>
  )
}

export const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
