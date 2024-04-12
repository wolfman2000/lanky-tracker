import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useCastleDirt, useGeneralDirt, useHoardDirt, useIslandDirt } from '@renderer/hooks/isles'
import { useShuffleDirt } from '@renderer/hooks/settings'
import DirtAztec from './DirtAztec'
import IslesCheck from './IslesCheck'

const VanillaDirtLocations: React.FC = () => {
  const dirt = useGeneralDirt()
  const castle = useCastleDirt()

  return (
    <>
      <IslesCheck
        id={70}
        name="Isles Dirt Training Grounds Back"
        region="Main Isle"
        canGetLogic={dirt}
      />
      <IslesCheck
        id={71}
        name="Isles Dirt Banana Hoard"
        region="Main Isle"
        canGetLogic={useHoardDirt()}
      />
      <IslesCheck id={72} name="Isles Dirt Back of Prison" region="Krem Isle" canGetLogic={dirt} />
      <IslesCheck
        id={73}
        name="Isles Dirt Under Caves Lobby"
        region="Main Isle"
        canGetLogic={dirt}
      />
      <DirtAztec />
      <IslesCheck
        id={75}
        name="Isles Dirt Cabin Isle"
        region="Outer Isles"
        canGetLogic={useIslandDirt()}
      />
      <IslesCheck
        id={76}
        name="Isles Dirt Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={castle.in}
        canGetBreak={castle.out}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <>
      <IslesCheck id={270} name="Isles Dirt Location #1" canGetLogic={dirt} />
      <IslesCheck id={271} name="Isles Dirt Location #2" canGetLogic={dirt} />
      <IslesCheck id={272} name="Isles Dirt Location #3" canGetLogic={dirt} />
      <IslesCheck id={273} name="Isles Dirt Location #4" canGetLogic={dirt} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
