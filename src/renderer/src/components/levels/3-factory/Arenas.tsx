import ArenaPool from '@renderer/components/pools/Arenas'
import { useArena, useGeneralThing } from '@renderer/hooks/factory'
import { useShuffledArenas } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  return <FactoryCheck id={3090} name="Factory Arena" region="R&D Area" canGetLogic={useArena()} />
}

const Shuffled: React.FC = () => {
  return (
    <>
      <FactoryCheck id={3190} name="Factory Arena" canGetLogic={useGeneralThing()} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
