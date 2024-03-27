import { useForestBean, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from './ForestCheck'
import { useAnyKong, useShockwave } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '../pools/RainbowCoins'

const VanillaDirtLocations: React.FC = () => {
  const beanstalk = useForestBean()
  const shockwave = useShockwave()
  const inStage = usePlayForest()
  return (
    <>
      <ForestCheck
        id={5070}
        name="Forest Dirt Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && shockwave}
      />
      <ForestCheck
        id={5071}
        name="Forest Dirt Mills Grass"
        region="Forest Mills"
        canGetLogic={inStage && shockwave}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const inStage = usePlayForest()
  return (
    <>
      <ForestCheck
        id={5270}
        name="Forest Dirt Location #1"
        canGetLogic={inStage && anyKong && shockwave}
      />
      <ForestCheck
        id={5271}
        name="Forest Dirt Location #2"
        canGetLogic={inStage && anyKong && shockwave}
      />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.shuffleDirt))
  const locations = shuffle ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
