import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useAztec5DoorTemple, useAztecFront } from '@renderer/hooks/aztec'
import { useAnyKong, usePineapple, useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from './AztecCheck'

const VanillaDirtLocations: React.FC = () => {
  const shockwave = useShockwave()
  const aztecFront = useAztecFront()
  const pineapple = usePineapple()
  const door = useAztec5DoorTemple()
  return (
    <>
      <AztecCheck
        id={2070}
        name="Aztec Dirt Oasis"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecFront.in && shockwave}
        canGetBreak={aztecFront.out && shockwave}
      />
      <AztecCheck
        id={2071}
        name="Aztec Dirt Chunky Temple"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && shockwave}
        canGetBreak={door.out && pineapple && shockwave}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const aztecFront = useAztecFront()
  return (
    <>
      <AztecCheck
        id={2270}
        name="Aztec Dirt Location #1"
        canGetLogic={aztecFront.in && anyKong && shockwave}
        canGetBreak={logicBreak(aztecFront) && anyKong && shockwave}
      />
      <AztecCheck
        id={2271}
        name="Aztec Dirt Location #2"
        canGetLogic={aztecFront.in && anyKong && shockwave}
        canGetBreak={logicBreak(aztecFront) && anyKong && shockwave}
      />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
