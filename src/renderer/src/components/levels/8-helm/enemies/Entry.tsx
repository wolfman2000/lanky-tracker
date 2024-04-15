import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useHelmEnter } from '@renderer/hooks/helm'
import { useAnyKong } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const HelmEntryEnemies: React.FC = () => {
  const helmEntry = useHelmEnter()
  const anyKong = useAnyKong()
  const klump = useDefeatKlump()
  return (
    <>
      <HelmCheck id={8300} name="Helm Enemy: Start 0" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8301} name="Helm Enemy: Start 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8302} name="Helm Enemy: Hill" canGetLogic={helmEntry && anyKong && klump} />
      <HelmCheck
        id={8303}
        name="Helm Enemy: Switch Room 0"
        canGetLogic={helmEntry && anyKong && klump}
      />
      <HelmCheck id={8304} name="Helm Enemy: Switch Room 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8305} name="Helm Enemy: Mini Room 0" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8306} name="Helm Enemy: Mini Room 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8307} name="Helm Enemy: Mini Room 2" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8308} name="Helm Enemy: Mini Room 3" canGetLogic={helmEntry && anyKong} />
    </>
  )
}
export default HelmEntryEnemies
