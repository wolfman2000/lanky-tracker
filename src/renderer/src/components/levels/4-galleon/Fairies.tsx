import FairyPool from '@renderer/components/pools/Fairies'
import { useChestFairy, useGeneralFairy, useShipFairy } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <GalleonCheck
        id={4080}
        name="Galleon Fairy (In Punch Chest)"
        region="Galleon Caverns"
        canGetLogic={useChestFairy()}
      />
      <GalleonCheck
        id={4081}
        name="Galleon Fairy (In Tiny's 5 Door Ship)"
        region="5 Door Ship"
        canGetLogic={useShipFairy()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <>
      <GalleonCheck id={4280} name="Galleon Fairy Location #1" canGetLogic={thing} />
      <GalleonCheck id={4281} name="Galleon Fairy Location #2" canGetLogic={thing} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
