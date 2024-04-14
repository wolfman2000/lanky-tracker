import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useCabinKasplat,
  useFunkyKasplat,
  useGeneralThing,
  useIceCastleKasplat,
  useIglooKasplat,
  usePillarKasplat
} from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => {
  const pillar = usePillarKasplat()
  const miniFunky = useFunkyKasplat()
  return (
    <>
      <CavesCheck
        id={6050}
        name="Caves Kasplat: Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={useIceCastleKasplat()}
      />
      <CavesCheck
        id={6051}
        name="Caves Kasplat: Mini Room by Funky"
        region="Main Caves Area"
        canGetLogic={miniFunky.in}
        canGetBreak={miniFunky.out}
      />
      <CavesCheck
        id={6052}
        name="Caves Kasplat: On the Pillar"
        region="Main Caves Area"
        canGetLogic={pillar.in}
        canGetBreak={pillar.out}
      />
      <CavesCheck
        id={6053}
        name="Caves Kasplat: By the Far Warp 2 (Cabins)"
        region="Cabins Area"
        canGetLogic={useCabinKasplat()}
      />
      <CavesCheck
        id={6054}
        name="Caves Kasplat On 5-Door Igloo"
        region="Igloo Area"
        canGetLogic={useIglooKasplat()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()

  return (
    <>
      <CavesCheck id={6250} name="Caves Kasplat Location #1" canGetLogic={thing} />
      <CavesCheck id={6251} name="Caves Kasplat Location #2" canGetLogic={thing} />
      <CavesCheck id={6252} name="Caves Kasplat Location #3" canGetLogic={thing} />
      <CavesCheck id={6253} name="Caves Kasplat Location #4" canGetLogic={thing} />
      <CavesCheck id={6254} name="Caves Kasplat Location #5" canGetLogic={thing} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
