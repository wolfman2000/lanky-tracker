import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDk5DoorShipGb, useDkBlastGb, useDkLighthouseGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../GalleonCheck'

const DkBananas: React.FC = () => {
  const lighthouseGb = useDkLighthouseGb()
  const blastGb = useDkBlastGb()
  return (
    <>
      <GalleonCheck
        id={4001}
        name="Galleon DK Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouseGb.in}
        canGetBreak={lighthouseGb.out}
      />
      <GalleonCheck
        id={4002}
        name="Galleon DK Free the Seal"
        region="Shipyard Outskirts"
        canGetLogic={blastGb.in}
        canGetBreak={blastGb.out}
      />
      <ToughGoldenBanana>
        <GalleonCheck
          id={4003}
          name="Galleon DK Seal Race"
          region="Shipyard Outskirts"
          canGetLogic={blastGb.in}
          canGetBreak={blastGb.out}
        />
      </ToughGoldenBanana>
      <GalleonCheck
        id={4004}
        name="Galleon DK 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={useDk5DoorShipGb()}
      />
    </>
  )
}

export default DkBananas
