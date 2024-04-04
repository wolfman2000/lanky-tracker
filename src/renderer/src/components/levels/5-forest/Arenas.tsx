import ArenaPool from '@renderer/components/pools/Arenas'
import { usePlayForest } from '@renderer/hooks/forest'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  return (
    <ForestCheck
      id={5090}
      name="Forest Arena"
      region="Giant Mushroom Exterior"
      canGetLogic={inStage && anyKong}
    />
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  return (
    <>
      <ForestCheck id={5190} name="Forest Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
