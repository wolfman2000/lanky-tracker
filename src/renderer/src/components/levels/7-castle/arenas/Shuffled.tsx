import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/castle'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <CastleCheck id={7190} name="Castle Arena" canGetLogic={useGeneralThing()} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
