import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/japes'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <FairyPool>
      <JapesCheck id={1280} name="Japes Fairy Location #1" canGetLogic={useGeneralFairy()} />
      <JapesCheck id={1281} name="Japes Fairy Location #2" canGetLogic={useGeneralFairy()} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
