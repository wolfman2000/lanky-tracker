import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useLankyGreenhouseGb } from '@renderer/hooks/castle'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  return (
    <CastleCheck
      id={7090}
      name="Castle Arena (Greenhouse: Center)"
      region="Castle Surroundings"
      canGetLogic={useLankyGreenhouseGb()}
    />
  )
}

const Shuffled: React.FC = () => {
  return (
    <>
      <CastleCheck id={7190} name="Castle Arena" canGetLogic={useGeneralThing()} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
