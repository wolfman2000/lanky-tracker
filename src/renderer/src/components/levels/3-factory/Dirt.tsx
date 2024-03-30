import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, usePunch, useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

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
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
