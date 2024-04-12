import ArenaPool from '@renderer/components/pools/Arenas'
import { useForestArena, useSnideArena } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <IslesCheck
        id={90}
        name="Isles Snide Arena"
        region="Krem Isle"
        canGetLogic={useSnideArena()}
      />
      <IslesCheck
        id={91}
        name="Isles Forest Arena"
        region="Japes-Forest Lobbies"
        canGetLogic={useForestArena()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  return (
    <>
      <IslesCheck id={190} name="Isles Arena Location #1" canGetLogic={anyKong} />
      <IslesCheck id={191} name="Isles Arena Location #2" canGetLogic={anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
