import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/japes'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <JapesCheck id={1190} name="Japes Arena" canGetLogic={useGeneralThing()} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
