import {
  useDiddy5DoorShipGb,
  useDiddyGoldGb,
  useDiddyMechGb,
  useDiddyLighthouseGb as useGalleonDiddyLighthouseGb
} from '@renderer/hooks/galleon'
import GalleonCheck from '../GalleonCheck'

const DiddyBananas: React.FC = () => {
  const shipGb = useGalleonDiddyLighthouseGb()
  const goldGb = useDiddyGoldGb()
  const mechGb = useDiddyMechGb()
  return (
    <>
      <GalleonCheck
        id={4010}
        name="Galleon Diddy Ship Switch"
        region="Lighthouse Area"
        canGetLogic={shipGb.in}
        canGetBreak={shipGb.out}
      />
      <GalleonCheck
        id={4011}
        name="Galleon Diddy Gold Tower"
        region="Treasure Room"
        canGetLogic={goldGb.in}
        canGetBreak={goldGb.out}
      />
      <GalleonCheck
        id={4012}
        name="Galleon Diddy Mechfish"
        region="Shipyard Outskirts"
        canGetLogic={mechGb.in}
        canGetBreak={mechGb.out}
      />
      <GalleonCheck
        id={4013}
        name="Galleon Diddy 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={useDiddy5DoorShipGb()}
      />
    </>
  )
}

export default DiddyBananas
