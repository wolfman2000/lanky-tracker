import MiscPool from '@renderer/components/pools/Misc'
import {
  useTiny2DoorShipGb,
  useTiny5DoorShipGb,
  useTinyClams,
  useTinyMermaidGb,
  useTinySubGb
} from '@renderer/hooks/galleon'
import GalleonCheck from '../GalleonCheck'

const TinyBananas: React.FC = () => {
  const clams = useTinyClams()
  return (
    <>
      <GalleonCheck
        id={4030}
        name="Galleon Tiny Mermaid"
        region="Lighthouse Area"
        canGetLogic={useTinyMermaidGb()}
      />
      <GalleonCheck
        id={4031}
        name="Galleon Tiny Submarine"
        region="Shipyard Outskirts"
        canGetLogic={useTinySubGb()}
      />
      <GalleonCheck
        id={4032}
        name="Galleon Tiny 2 Door Ship"
        region="Shipyard Outskirts"
        canGetLogic={useTiny2DoorShipGb()}
      />
      <GalleonCheck
        id={4033}
        name="Galleon Tiny 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={useTiny5DoorShipGb()}
      />
      <MiscPool>
        <GalleonCheck
          id={4034}
          name="Galleon Tiny Treasure Chest Clams x5"
          region="Treasure Room"
          canGetLogic={clams.in}
          canGetBreak={clams.out}
        />
      </MiscPool>
    </>
  )
}
export default TinyBananas
