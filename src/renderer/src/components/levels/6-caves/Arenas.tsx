import ArenaPool from '@renderer/components/pools/Arenas'
import { useDkRotateGb, useGeneralThing } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => {
  return (
    <CavesCheck
      id={6090}
      name="Caves Arena (Rotating Room: Left Portion)"
      region="Cabins Area"
      canGetLogic={useDkRotateGb()}
    />
  )
}

const Shuffled: React.FC = () => {
  return (
    <>
      <CavesCheck id={6190} name="Caves Arena" canGetLogic={useGeneralThing()} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
