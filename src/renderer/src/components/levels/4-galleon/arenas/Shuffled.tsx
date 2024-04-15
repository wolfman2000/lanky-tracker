import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <GalleonCheck id={4190} name="Galleon Arena" canGetLogic={useGeneralThing()} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
