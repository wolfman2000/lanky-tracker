import { useAnyKong } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '../pools/Crates'
import FactoryCheck from './FactoryCheck'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'

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
  const shuffle = useDonkStore(useShallow((state) => state.shuffleCrates))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
