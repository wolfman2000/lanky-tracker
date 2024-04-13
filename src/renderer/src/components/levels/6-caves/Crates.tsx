import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => null

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <CavesCheck id={6260} name="Caves Crate Location #1 (maybe)" canGetLogic={thing} />
      <CavesCheck id={6261} name="Caves Crate Location #2 (maybe)" canGetLogic={thing} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
