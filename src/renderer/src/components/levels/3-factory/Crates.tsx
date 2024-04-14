import CratePool from '@renderer/components/pools/Crates'
import { useGeneralTest, useGeneralThing } from '@renderer/hooks/factory'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <FactoryCheck
        id={3060}
        name="Factory Crate: Near Candy"
        region="Storage And Arcade"
        canGetLogic={useGeneralThing()}
      />
      <FactoryCheck
        id={3061}
        name="Factory Crate: Near Funky"
        region="Testing Area"
        canGetLogic={useGeneralTest()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <FactoryCheck id={1260} name="Factory Crate Location #1 (maybe)" canGetLogic={thing} />
      <FactoryCheck id={1261} name="Factory Crate Location #2 (maybe)" canGetLogic={thing} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
