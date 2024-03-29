import { usePlayFactory } from '@renderer/hooks/factory'
import FactoryCheck from './FactoryCheck'
import { useAnyKong, usePunch, useShockwave } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '../pools/RainbowCoins'

const VanillaDirtLocations: React.FC = () => {
  const inStage = usePlayFactory()
  const shockwave = useShockwave()
  const punch = usePunch()
  return (
    <FactoryCheck
      id={3070}
      name="Factory Dirt Dark Room"
      region="Storage And Arcade"
      canGetLogic={inStage && punch && shockwave}
    />
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const inStage = usePlayFactory()
  return (
    <>
      <FactoryCheck
        id={3270}
        name="Factory Dirt Location #1"
        canGetLogic={inStage && anyKong && shockwave}
      />
      <FactoryCheck
        id={3271}
        name="Factory Dirt Location #2"
        canGetLogic={inStage && anyKong && shockwave}
      />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleDirt))
  const locations = shuffle ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
