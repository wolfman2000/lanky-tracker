import ArenaPool from '@renderer/components/pools/Arenas'
import { usePlayForest } from '@renderer/hooks/forest'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useAllGun, useAnyKong, useBoulderTech, useGone } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => {
  const islesKremAscent = useIslesKremAscent()
  const boulderTech = useBoulderTech()
  const playForest = usePlayForest()
  const allGun = useAllGun()
  const gone = useGone()
  return (
    <>
      <IslesCheck
        id={90}
        name="Isles Snide Arena"
        region="Krem Isle"
        canGetLogic={islesKremAscent && boulderTech}
      />
      <IslesCheck
        id={91}
        name="Isles Forest Arena"
        region="Outer Isles"
        canGetLogic={playForest && allGun && gone}
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
