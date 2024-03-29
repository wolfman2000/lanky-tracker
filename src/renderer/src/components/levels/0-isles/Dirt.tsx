import { useShallow } from 'zustand/react/shallow'

import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { usePlayCastle } from '@renderer/hooks/castle'
import {
  useAnyKong,
  useBalloon,
  useBoulderTech,
  useShockwave,
  useTiny
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import DirtAztec from './DirtAztec'
import IslesCheck from './IslesCheck'

const VanillaDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const boulderTech = useBoulderTech()
  const tiny = useTiny()
  const balloon = useBalloon()
  const playCastle = usePlayCastle()
  const [vine, key4, openLobbies] = useDonkStore(
    useShallow((state) => [state.moves.vine, state.key4, state.settings.openLobbies])
  )

  return (
    <>
      <IslesCheck
        id={70}
        name="Isles Dirt Training Grounds Back"
        region="Main Isle"
        canGetLogic={anyKong && shockwave}
      />
      <IslesCheck
        id={71}
        name="Isles Dirt Banana Hoard"
        region="Main Isle"
        canGetLogic={anyKong && vine && shockwave}
      />
      <IslesCheck
        id={72}
        name="Isles Dirt Back of Prison"
        region="Krem Isle"
        canGetLogic={anyKong && shockwave}
      />
      <IslesCheck
        id={73}
        name="Isles Dirt Under Caves Lobby"
        region="Main Isle"
        canGetLogic={anyKong && shockwave}
      />
      <DirtAztec />
      <IslesCheck
        id={75}
        name="Isles Dirt Cabin Isle"
        region="Outer Isles"
        canGetLogic={(key4 || openLobbies) && anyKong && shockwave}
      />
      <IslesCheck
        id={76}
        name="Isles Dirt Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playCastle && boulderTech && balloon && shockwave}
        canGetBreak={playCastle && tiny && shockwave}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  return (
    <>
      <IslesCheck id={270} name="Isles Dirt Location #1" canGetLogic={anyKong && shockwave} />
      <IslesCheck id={271} name="Isles Dirt Location #2" canGetLogic={anyKong && shockwave} />
      <IslesCheck id={272} name="Isles Dirt Location #3" canGetLogic={anyKong && shockwave} />
      <IslesCheck id={273} name="Isles Dirt Location #4" canGetLogic={anyKong && shockwave} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleDirt))
  const locations = shuffle ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
