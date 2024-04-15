import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const KremLiftEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const kremAscent = useIslesKremAscent()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={306}
        name="Isles Enemy: Upper Factory Path"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent}
      />
      <IslesCheck
        id={308}
        name="Isles Enemy: Lower Factory Path 0"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && zinger}
      />
      <IslesCheck
        id={309}
        name="Isles Enemy: Lower Factory Path 1"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && zinger}
      />
    </DropPool>
  )
}

export default KremLiftEnemies
