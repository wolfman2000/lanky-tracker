import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/castle'
import { useShuffleCrates } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <CastleCheck
        id={7060}
        name="Castle Crate: Behind Mausoleum Entrance"
        region="Castle Underground"
        canGetLogic={useGeneralThing()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <CastleCheck id={7260} name="Castle Crate Location #1 (maybe)" canGetLogic={thing} />
      <CastleCheck id={7261} name="Castle Crate Location #2 (maybe)" canGetLogic={thing} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
