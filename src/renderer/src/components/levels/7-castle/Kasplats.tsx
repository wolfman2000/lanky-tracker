import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useDungeonKasplat,
  useGeneralThing,
  useLonelyKasplat,
  useMausoleumKasplat,
  usePathKasplat,
  useTreeKasplat
} from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <CastleCheck
        id={7050}
        name="Castle Kasplat: Inside the Tree"
        region="Castle Surroundings"
        canGetLogic={useTreeKasplat()}
      />
      <CastleCheck
        id={7051}
        name="Castle Kasplat: Lower Cave Center"
        region="Castle Underground"
        canGetLogic={useMausoleumKasplat()}
      />
      <CastleCheck
        id={7052}
        name="Castle Kasplat: Near Upper Warp 2"
        region="Castle Surroundings"
        canGetLogic={usePathKasplat()}
      />
      <CastleCheck
        id={7053}
        name="Castle Kasplat: On a lone platform"
        region="Castle Surroundings"
        canGetLogic={useLonelyKasplat()}
      />
      <CastleCheck
        id={7054}
        name="Castle Kasplat: Near Candy's"
        region="Castle Underground"
        canGetLogic={useDungeonKasplat()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const kasplat = useGeneralThing()

  return (
    <>
      <CastleCheck id={7250} name="Castle Kasplat Location #1" canGetLogic={kasplat} />
      <CastleCheck id={7251} name="Castle Kasplat Location #2" canGetLogic={kasplat} />
      <CastleCheck id={7252} name="Castle Kasplat Location #3" canGetLogic={kasplat} />
      <CastleCheck id={7253} name="Castle Kasplat Location #4" canGetLogic={kasplat} />
      <CastleCheck id={7254} name="Castle Kasplat Location #5" canGetLogic={kasplat} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
