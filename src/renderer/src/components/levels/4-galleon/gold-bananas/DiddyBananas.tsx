import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import {
  useDive,
  useGuitar,
  useHighGrab,
  useRocket,
  useSlam,
  useSpring
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import GalleonCheck from '../GalleonCheck'

const DiddyBananas: React.FC = () => {
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const treasure = useGalleonTreasureRoom()
  const highTide = useGalleonHighTide()
  const canSlam = useSlamGalleon()
  const slam = useSlam()
  const rocket = useRocket()
  const spring = useSpring()
  const guitar = useGuitar()
  const highGrab = useHighGrab()
  const dive = useDive()
  return (
    <>
      <GalleonCheck
        id={4010 /* TODO: Remember fast checks here. */}
        name="Galleon Diddy Ship Switch"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && highTide && canSlam && rocket}
        canGetBreak={lighthouseArea && slam && rocket}
      />
      <GalleonCheck
        id={4011}
        name="Galleon Diddy Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in && spring}
        canGetBreak={logicBreak(treasure) && highGrab}
      />
      <GalleonCheck
        id={4012}
        name="Galleon Diddy Mechfish"
        region="Shipyard Outskirts"
        canGetLogic={lighthouseArea && outskirts && highTide && rocket && guitar}
        canGetBreak={lighthouseArea && outskirts && dive && rocket && guitar}
      />
      <GalleonCheck
        id={4013}
        name="Galleon Diddy 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && guitar && dive}
      />
    </>
  )
}

export default DiddyBananas
