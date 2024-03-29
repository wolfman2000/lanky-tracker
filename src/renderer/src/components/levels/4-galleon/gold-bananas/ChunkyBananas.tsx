import {
  useGalleonCannon,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useBoulderTech, useDive, usePunch, useSlam, useTriangle } from '@renderer/hooks/kongs'
import GalleonCheck from '../GalleonCheck'

const ChunkyBananas: React.FC = () => {
  const inStage = usePlayGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const cannon = useGalleonCannon()
  const boulderTech = useBoulderTech()
  const punch = usePunch()
  const triangle = useTriangle()
  const slam = useSlam()
  const dive = useDive()
  return (
    <>
      <GalleonCheck
        id={4040}
        name="Galleon Chunky Chest"
        region="Galleon Caverns"
        canGetLogic={inStage && punch}
      />
      <GalleonCheck
        id={4041}
        name="Galleon Chunky Cannon Game"
        region="Galleon Caverns"
        canGetLogic={cannon && boulderTech && highTide}
        canGetBreak={cannon && boulderTech}
      />
      <GalleonCheck
        id={4042}
        name="Galleon Chunky Seasick"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && punch && slam}
      />
      <GalleonCheck
        id={4043}
        name="Galleon Chunky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={lighthouseArea && outskirts && dive && triangle}
      />
    </>
  )
}

export default ChunkyBananas
