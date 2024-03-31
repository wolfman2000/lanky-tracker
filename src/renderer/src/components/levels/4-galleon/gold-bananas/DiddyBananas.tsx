import {
  useGalleonDiddyLighthouseBanana,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonLowTide,
  useGalleonOutskirts,
  useGalleonTreasureRoom
} from '@renderer/hooks/galleon'
import { useDive, useGuitar, useHighGrab, useRocket, useSpring } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import GalleonCheck from '../GalleonCheck'

const DiddyBananas: React.FC = () => {
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const treasure = useGalleonTreasureRoom()
  const lowTide = useGalleonLowTide()
  const highTide = useGalleonHighTide()
  const rocket = useRocket()
  const spring = useSpring()
  const guitar = useGuitar()
  const highGrab = useHighGrab()
  const dive = useDive()
  const lighthouseBanana = useGalleonDiddyLighthouseBanana()
  return (
    <>
      <GalleonCheck
        id={4010}
        name="Galleon Diddy Ship Switch"
        region="Lighthouse Area"
        canGetLogic={lighthouseBanana.in}
        canGetBreak={lighthouseBanana.out}
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
        canGetLogic={outskirts && lowTide && guitar && dive}
      />
    </>
  )
}

export default DiddyBananas
