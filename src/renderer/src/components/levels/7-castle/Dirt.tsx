import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useAnyKong, useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
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
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
