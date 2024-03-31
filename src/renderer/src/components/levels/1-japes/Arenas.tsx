import ArenaPool from '@renderer/components/pools/Arenas'
import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  return (
    <JapesCheck
      id={1090}
      name="Japes Arena"
      region="Japes Hillside"
      canGetLogic={inStage && anyKong}
    />
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  return (
    <>
      <JapesCheck id={1190} name="Japes Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
