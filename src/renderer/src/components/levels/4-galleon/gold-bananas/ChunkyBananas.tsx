import {
  useChunky5DoorShipGb,
  useChunkyCannonGb,
  useChunkyChestGb,
  useChunkySeasickGb
} from '@renderer/hooks/galleon'
import GalleonCheck from '../GalleonCheck'

const ChunkyBananas: React.FC = () => {
  const cannonGb = useChunkyCannonGb()
  return (
    <>
      <GalleonCheck
        id={4040}
        name="Galleon Chunky Chest"
        region="Galleon Caverns"
        canGetLogic={useChunkyChestGb()}
      />
      <GalleonCheck
        id={4041}
        name="Galleon Chunky Cannon Game"
        region="Galleon Caverns"
        canGetLogic={cannonGb.in}
        canGetBreak={cannonGb.out}
      />
      <GalleonCheck
        id={4042}
        name="Galleon Chunky Seasick"
        region="Lighthouse Area"
        canGetLogic={useChunkySeasickGb()}
      />
      <GalleonCheck
        id={4043}
        name="Galleon Chunky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={useChunky5DoorShipGb()}
      />
    </>
  )
}

export default ChunkyBananas
