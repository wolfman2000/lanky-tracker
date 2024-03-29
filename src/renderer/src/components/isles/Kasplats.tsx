import { usePlayCastle } from '@renderer/hooks/castle'
import { usePlayCaves } from '@renderer/hooks/caves'
import { usePlayFactory } from '@renderer/hooks/factory'
import { usePlayGalleon } from '@renderer/hooks/galleon'
import { usePlayHelm } from '@renderer/hooks/helm'
import { useAnyKong, useCoconut, usePunch, useSniper, useTwirl } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KasplatPool from '../pools/Kasplats'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => {
  const playHelm = usePlayHelm()
  const playCastle = usePlayCastle()
  const playCaves = usePlayCaves()
  const playFactory = usePlayFactory()
  const playGalleon = usePlayGalleon()
  const sniper = useSniper()
  const coconut = useCoconut()
  const twirl = useTwirl()
  const punch = usePunch()
  const anyKong = useAnyKong()
  return (
    <>
      <IslesCheck
        id={50}
        name="Isles Kasplat Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playHelm && sniper && coconut}
        canGetBreak={playHelm && twirl}
      />
      <IslesCheck
        id={51}
        name="Isles Kasplat Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playCastle && coconut}
      />
      <IslesCheck
        id={52}
        name="Isles Kasplat Caves Lobby Punch"
        region="Caves-Helm Lobbies"
        canGetLogic={playCaves && punch}
      />
      <IslesCheck
        id={53}
        name="Isles Kasplat Factory Lobby Box"
        region="Japes-Forest Lobbies"
        canGetLogic={playFactory && punch}
      />
      <IslesCheck
        id={54}
        name="Isles Kasplat Galleon Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={playGalleon && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()

  return (
    <>
      <IslesCheck id={250} name="Isles Kasplat Location #1" canGetLogic={anyKong} />
      <IslesCheck id={251} name="Isles Kasplat Location #2" canGetLogic={anyKong} />
      <IslesCheck id={252} name="Isles Kasplat Location #3" canGetLogic={anyKong} />
      <IslesCheck id={253} name="Isles Kasplat Location #4" canGetLogic={anyKong} />
      <IslesCheck id={254} name="Isles Kasplat Location #5" canGetLogic={anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleKasplats))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
