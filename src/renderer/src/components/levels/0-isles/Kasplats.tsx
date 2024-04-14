import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useCastleKasplat,
  useCavesKasplat,
  useFactoryKasplat,
  useGalleonKasplat,
  useHelmKasplat
} from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => {
  const helmKasplat = useHelmKasplat()
  return (
    <>
      <IslesCheck
        id={50}
        name="Isles Kasplat: Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={helmKasplat.in}
        canGetBreak={helmKasplat.out}
      />
      <IslesCheck
        id={51}
        name="Isles Kasplat: Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={useCastleKasplat()}
      />
      <IslesCheck
        id={52}
        name="Isles Kasplat: Caves Lobby Punch"
        region="Caves-Helm Lobbies"
        canGetLogic={useCavesKasplat()}
      />
      <IslesCheck
        id={53}
        name="Isles Kasplat: Factory Lobby Box"
        region="Japes-Forest Lobbies"
        canGetLogic={useFactoryKasplat()}
      />
      <IslesCheck
        id={54}
        name="Isles Kasplat: Galleon Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={useGalleonKasplat()}
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
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
