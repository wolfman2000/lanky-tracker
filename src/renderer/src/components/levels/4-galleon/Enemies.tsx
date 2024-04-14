import {
  useDefeatKaboom,
  useDefeatKlobber,
  useDefeatKlump,
  useDefeatKosha
} from '@renderer/hooks/enemies'
import {
  useGalleonLighthousePlatform,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useAnyKong, useDk } from '@renderer/hooks/kongs'
import GalleonCheck from './GalleonCheck'

const EnemyLocations: React.FC = () => {
  const inStage = usePlayGalleon()
  const lighthouse = useGalleonLighthousePlatform()
  const klobber = useDefeatKlobber()
  const kaboom = useDefeatKaboom()
  const kosha = useDefeatKosha()
  const anyKong = useAnyKong()
  const klump = useDefeatKlump()
  const dk = useDk()
  const canSlam = useSlamGalleon()

  return (
    <>
      <GalleonCheck
        id={4300}
        name="Galleon Enemy: Chest Room 0"
        region="Galleon Caverns"
        canGetLogic={inStage && klobber}
      />
      <GalleonCheck
        id={4301}
        name="Galleon Enemy: Chest Room 1"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom}
      />
      <GalleonCheck
        id={4302}
        name="Galleon Enemy: Vine Cannon"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom}
      />
      <GalleonCheck
        id={4303}
        name="Galleon Enemy: Cranky Cannon"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom}
      />
      <GalleonCheck
        id={4304}
        name="Galleon Enemy: Peanut Tunnel"
        region="Galleon Caverns"
        canGetLogic={inStage && kosha}
      />
      <GalleonCheck
        id={4306}
        name="Galleon Enemy: Coconut Tunnel"
        region="Galleon Caverns"
        canGetLogic={inStage && anyKong}
      />
      <GalleonCheck
        id={4307}
        name="Galleon Enemy: Lighthouse 0"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump}
      />
      <GalleonCheck
        id={4308}
        name="Galleon Enemy: Lighthouse 1"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump}
      />
    </>
  )
}

export default EnemyLocations
