import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useCactusKasplat,
  useCannonKasplat,
  useGeneralThing,
  useLighthouseKasplat,
  useTreasureKasplat,
  useVineKasplat
} from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  const galleonTop = useVineKasplat()
  const cannon = useCannonKasplat()
  const treasure = useTreasureKasplat()

  return (
    <>
      <GalleonCheck
        id={4050}
        name="Galleon Kasplat: Diddy Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in}
        canGetBreak={treasure.out}
      />
      <GalleonCheck
        id={4051}
        name="Galleon Kasplat: Lighthouse Alcove"
        region="Lighthouse Area"
        canGetLogic={useLighthouseKasplat()}
      />
      <GalleonCheck
        id={4052}
        name="Galleon Kasplat: Cannon Game Room"
        region="Galleon Caverns"
        canGetLogic={cannon.in}
        canGetBreak={cannon.out}
      />
      <GalleonCheck
        id={4053}
        name="Galleon Kasplat: Past Vines"
        region="Galleon Caverns"
        canGetLogic={galleonTop.in}
        canGetBreak={galleonTop.out}
      />
      <GalleonCheck
        id={4054}
        name="Galleon Kasplat: Musical Cactus"
        region="Shipyard Outskirts"
        canGetLogic={useCactusKasplat()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <GalleonCheck id={4250} name="Galleon Kasplat Location #1" canGetLogic={thing} />
      <GalleonCheck id={4251} name="Galleon Kasplat Location #2" canGetLogic={thing} />
      <GalleonCheck id={4252} name="Galleon Kasplat Location #3" canGetLogic={thing} />
      <GalleonCheck id={4253} name="Galleon Kasplat Location #4" canGetLogic={thing} />
      <GalleonCheck id={4254} name="Galleon Kasplat Location #5" canGetLogic={thing} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
