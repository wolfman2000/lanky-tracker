import {
  useGalleonLighthouseArea,
  useGalleonLowTide,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useBalloon, useDive, useHighGrab, useLanky, useTrombone } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import GalleonCheck from '../GalleonCheck'

const LankyBananas: React.FC = () => {
  const canSlam = useSlamGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const treasure = useGalleonTreasureRoom()
  const lowTide = useGalleonLowTide()
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  const lanky = useLanky()
  const balloon = useBalloon()
  const trombone = useTrombone()
  const highGrab = useHighGrab()
  return (
    <>
      <GalleonCheck
        id={4020}
        name="Galleon Lanky Enguarde Chest"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && lanky && dive}
      />
      <GalleonCheck
        id={4021}
        name="Galleon Lanky Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in && balloon}
        canGetBreak={logicBreak(treasure) && highGrab}
      />
      <GalleonCheck
        id={4022}
        name="Galleon Lanky 2 Door Ship"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && canSlam && lanky && dive}
      />
      <GalleonCheck
        id={4023}
        name="Galleon Lanky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && lowTide && trombone && dive}
      />
    </>
  )
}

export default LankyBananas
