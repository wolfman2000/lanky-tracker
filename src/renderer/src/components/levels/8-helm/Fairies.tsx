import FairyPool from '@renderer/components/pools/Fairies'
import { useHelmDoors, useHelmEnter } from '@renderer/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import { useShuffleFairies } from '@renderer/hooks/settings'
import HelmCheck from './HelmCheck'

const Vanilla: React.FC = () => {
  const helmDoors = useHelmDoors()
  const camera = useCamera()
  const anyKong = useAnyKong()
  return (
    <>
      <HelmCheck id={8110} name="Helm Fairies x2" canGetLogic={helmDoors && camera && anyKong} />
    </>
  )
}

const Shuffled: React.FC = () => {
  const entry = useHelmEnter()
  const camera = useCamera()
  const anyKong = useAnyKong()
  return (
    <>
      <HelmCheck id={8210} name="Helm Fairy Location #1" canGetLogic={entry && camera && anyKong} />
      <HelmCheck id={8211} name="Helm Fairy Location #2" canGetLogic={entry && camera && anyKong} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
