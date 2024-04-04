import { usePlayAztec } from '@renderer/hooks/aztec'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from './IslesCheck'

const EnemyLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const kremAscent = useIslesKremAscent()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  const playJapes = usePlayJapes()
  const playAztec = usePlayAztec()
  const playFactory = usePlayFactory()
  const playCastle = usePlayCastle()

  return (
    <>
      <IslesCheck
        id={300}
        name="Isles Enemy Pineapple Cage 0"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={301}
        name="Isles Enemy Pineapple Cage 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={302}
        name="Isles Enemy Fungi Cannon 0"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={303}
        name="Isles Enemy Fungi Cannon 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={304}
        name="Isles Enemy Japes Entrance"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={305}
        name="Isles Enemy Monkeyport Pad"
        region="Krem Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={306}
        name="Isles Enemy Upper Factory Path"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent}
      />
      <IslesCheck
        id={307}
        name="Isles Enemy Near Aztec"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={308}
        name="Isles Enemy Lower Factory Path 0"
        region="Krem Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={309}
        name="Isles Enemy Lower Factory Path 1"
        region="Krem Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={310}
        name="Isles Enemy Japes Lobby 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes}
      />
      <IslesCheck
        id={311}
        name="Isles Enemy Japes Lobby 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes}
      />
      <IslesCheck
        id={312}
        name="Isles Enemy Aztec Lobby 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playAztec && zinger}
      />
      <IslesCheck
        id={313}
        name="Isles Enemy Aztec Lobby 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playAztec && zinger}
      />
      <IslesCheck
        id={314}
        name="Isles Enemy Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && zinger}
      />
      <IslesCheck
        id={315}
        name="Isles Enemy Castle Lobby Left"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={316}
        name="Isles Enemy Castle Lobby Near Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={317}
        name="Isles Enemy Castle Lobby Far Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
    </>
  )
}

export default EnemyLocations
