import ArenaPool from '@renderer/components/pools/Arenas'
import { useHelmEnter } from '@renderer/hooks/helm'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
  const inStage = useHelmEnter()
  const anyKong = useAnyKong()
  return (
    <ArenaPool>
      <HelmCheck id={8190} name="Helm Arena" canGetLogic={inStage && anyKong} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
