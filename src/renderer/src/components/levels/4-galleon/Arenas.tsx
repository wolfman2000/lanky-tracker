import ArenaPool from '@renderer/components/pools/Arenas'
import { useArena, useGeneralThing } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  return (
    <GalleonCheck
      id={4090}
      name="Galleon Arena (Under Cranky)"
      region="Galleon Caverns"
      canGetLogic={useArena()}
    />
  )
}

const Shuffled: React.FC = () => {
  return (
    <>
      <GalleonCheck id={4190} name="Galleon Arena" canGetLogic={useGeneralThing()} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
