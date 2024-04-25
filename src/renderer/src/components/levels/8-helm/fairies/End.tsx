import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useHelmDoors } from '@renderer/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const EndOfHelmFairies: React.FC = () => {
  const helmDoors = useHelmDoors()
  const camera = useCamera()
  const anyKong = useAnyKong()
  return (
    <FairyPool>
      <VanillaFairy>
        <HelmCheck
          id={8110}
          name="Helm Fairies (Key 8 Room) x2"
          canGetLogic={helmDoors && camera && anyKong}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default EndOfHelmFairies
