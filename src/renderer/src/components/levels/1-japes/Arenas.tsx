import ArenaPool from '@renderer/components/pools/Arenas'
import { useArena } from '@renderer/hooks/japes'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  return (
    <JapesCheck id={1090} name="Japes Arena" region="Japes Hillside" canGetLogic={useArena()} />
  )
}

const Shuffled: React.FC = () => {
  return (
    <>
      <JapesCheck id={1190} name="Japes Arena" canGetLogic={useArena()} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
