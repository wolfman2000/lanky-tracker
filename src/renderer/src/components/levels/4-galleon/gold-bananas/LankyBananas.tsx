import {
  useLanky2DoorShipGb,
  useLanky5DoorShipGb,
  useLankyChestGb,
  useLankyGoldGb
} from '@renderer/hooks/galleon'
import GalleonCheck from '../GalleonCheck'

const LankyBananas: React.FC = () => {
  const goldGb = useLankyGoldGb()
  return (
    <>
      <GalleonCheck
        id={4020}
        name="Galleon Lanky Enguarde Chest"
        region="Lighthouse Area"
        canGetLogic={useLankyChestGb()}
      />
      <GalleonCheck
        id={4021}
        name="Galleon Lanky Gold Tower Barrel"
        region="Treasure Room"
        canGetLogic={goldGb.in}
        canGetBreak={goldGb.out}
      />
      <GalleonCheck
        id={4022}
        name="Galleon Lanky 2 Door Ship"
        region="Shipyard Outskirts"
        canGetLogic={useLanky2DoorShipGb()}
      />
      <GalleonCheck
        id={4023}
        name="Galleon Lanky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={useLanky5DoorShipGb()}
      />
    </>
  )
}

export default LankyBananas
