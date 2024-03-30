import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useJapesPaintingOutside, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong, useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const VanillaDirtLocations: React.FC = () => {
  const japesPaintingOutside = useJapesPaintingOutside()
  const shockwave = useShockwave()
  return (
    <>
      <JapesCheck
        id={1070}
        name="Japes Dirt Painting Hill"
        region="Japes Hillside"
        canGetLogic={japesPaintingOutside.in && shockwave}
        canGetBreak={japesPaintingOutside.out && shockwave}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const inStage = usePlayJapes()
  return (
    <>
      <JapesCheck
        id={1270}
        name="Japes Dirt Location #1"
        canGetLogic={inStage && anyKong && shockwave}
      />
      <JapesCheck
        id={1271}
        name="Japes Dirt Location #2"
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
