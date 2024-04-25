import FairyPool from '@renderer/components/pools/Fairies'
import { useHelmEnter } from '@renderer/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import { useShuffleFairies } from '@renderer/hooks/settings'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
  const entry = useHelmEnter()
  const camera = useCamera()
  const anyKong = useAnyKong()
  return (
    <FairyPool>
      <HelmCheck id={8210} name="Helm Fairy Location #1" canGetLogic={entry && camera && anyKong} />
      <HelmCheck id={8211} name="Helm Fairy Location #2" canGetLogic={entry && camera && anyKong} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
