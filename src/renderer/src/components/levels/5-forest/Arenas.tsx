import ArenaPool from '@renderer/components/pools/Arenas'
import { useArena, useGeneralThing } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  return (
    <ForestCheck
      id={5090}
      name="Forest Arena (Mushroom High Platform)"
      region="Giant Mushroom Exterior"
      canGetLogic={useArena()}
    />
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <ForestCheck id={5190} name="Forest Arena" canGetLogic={thing} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
