import CratePool from '@renderer/components/pools/Crates'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  const testing = useFactoryTesting()
  return (
    <>
      <FactoryCheck
        id={3060}
        name="Factory Crate Candy"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3061}
        name="Factory Crate Funky"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayFactory()

  return (
    <>
      <FactoryCheck
        id={1260}
        name="Factory Crate Location #1 (maybe)"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={1261}
        name="Factory Crate Location #2 (maybe)"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
