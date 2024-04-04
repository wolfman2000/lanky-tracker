import ArenaPool from '@renderer/components/pools/Arenas'
import { usePlayGalleon } from '@renderer/hooks/galleon'
import { useAnyKong, usePunch } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayGalleon()
  const punch = usePunch()
  return (
    <GalleonCheck
      id={4090}
      name="Galleon Arena"
      region="Galleon Caverns"
      canGetLogic={inStage && punch}
    />
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayGalleon()
  const anyKong = useAnyKong()
  return (
    <>
      <GalleonCheck id={4190} name="Galleon Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
