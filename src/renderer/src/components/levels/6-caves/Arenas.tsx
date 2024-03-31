import ArenaPool from '@renderer/components/pools/Arenas'
import { useAnyKong, useBongos, useSlam } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'
import { usePlayCaves } from '@renderer/hooks/caves'

const Vanilla: React.FC = () => {
  const inStage = usePlayCaves()
  const bongos = useBongos()
  const slam = useSlam()
  return (
    <CavesCheck
      id={6090}
      name="Caves Arena"
      region="Cabins Area"
      canGetLogic={inStage && bongos && slam}
    />
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  return (
    <>
      <CavesCheck id={6190} name="Caves Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
