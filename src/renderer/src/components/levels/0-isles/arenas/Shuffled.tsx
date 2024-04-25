import ArenaPool from '@renderer/components/pools/Arenas'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  if (!useShuffledArenas()) {
    return null
  }
  return (
    <ArenaPool>
      <IslesCheck id={190} name="Isles Arena Location #1" canGetLogic={anyKong} />
      <IslesCheck id={191} name="Isles Arena Location #2" canGetLogic={anyKong} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
