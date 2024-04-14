import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useGeneralThing, useTempleDirt } from '@renderer/hooks/aztec'
import { useShuffleDirt } from '@renderer/hooks/settings'
import AztecCheck from './AztecCheck'

const VanillaDirtLocations: React.FC = () => {
  const thing = useGeneralThing()
  const door = useTempleDirt()
  return (
    <>
      <AztecCheck
        id={2070}
        name="Aztec Dirt: Oasis"
        region="Aztec Oasis And Totem Area"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2071}
        name="Aztec Dirt: Chunky Temple"
        region="5 Door Temple"
        canGetLogic={door.in}
        canGetBreak={door.out}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const thing = useGeneralDirt()
  return (
    <>
      <AztecCheck
        id={2270}
        name="Aztec Dirt Location #1"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2271}
        name="Aztec Dirt Location #2"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
