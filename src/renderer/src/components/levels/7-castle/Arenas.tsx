import ArenaPool from '@renderer/components/pools/Arenas'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useAnyKong, useLanky } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()
  const lanky = useLanky()
  const canSlam = useSlamCastle()
  return (
    <CastleCheck
      id={7090}
      name="Castle Arena"
      region="Castle Surroundings"
      canGetLogic={inStage && lanky && canSlam}
    />
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayCastle()
  const anyKong = useAnyKong()
  return (
    <>
      <CastleCheck id={7190} name="Castle Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
