import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/factory'
import { useShuffledArenas } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <FactoryCheck id={3190} name="Factory Arena" canGetLogic={useGeneralThing()} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
