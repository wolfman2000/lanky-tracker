import { usePlayCastle } from '@renderer/hooks/castle'
import { useAnyKong, useShockwave } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '../pools/RainbowCoins'
import CastleCheck from './CastleCheck'

const VanillaDirtLocations: React.FC = () => {
  const inStage = usePlayCastle()
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  return (
    <>
      <CastleCheck
        id={7070}
        name="Castle Dirt Top Floor"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && shockwave}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const inStage = usePlayCastle()
  return (
    <>
      <CastleCheck
        id={7270}
        name="Castle Dirt Location #1"
        canGetLogic={inStage && anyKong && shockwave}
      />
      <CastleCheck
        id={7271}
        name="Castle Dirt Location #2"
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
