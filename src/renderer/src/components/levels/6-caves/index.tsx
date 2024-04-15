import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CabinArena from './arenas/Cabin'
import ShuffledArenas from './arenas/Shuffled'
import BossCheck from './boss'
import CrateLocations from './crates'
import ShuffledCrates from './crates/Shuffled'
import KoshaDirt from './dirt/Kosha'
import ShuffledDirtLocations from './dirt/Shuffled'
import EnemyLocations from './enemies'
import FairyLocations from './fairies'
import ShuffledFairies from './fairies/Shuffled'
import ChunkyBananas from './gold-bananas/chunky'
import DiddyBananas from './gold-bananas/diddy'
import DkBananas from './gold-bananas/dk'
import LankyBananas from './gold-bananas/lanky'
import TinyBananas from './gold-bananas/tiny'
import KasplatLocations from './kasplats'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import CavesRegionChecks from './regions'
import CavesShops from './shops'

const ClassicChecks: React.FC = () => (
  <div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
    <KasplatLocations />
    <CrateLocations />
    <ShuffledCrates />
    <KoshaDirt />
    <ShuffledDirtLocations />
    <FairyLocations />
    <ShuffledFairies />
    <CabinArena />
    <ShuffledArenas />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BossCheck />
    <CavesShops />
    <DropPool>
      <EnemyLocations />
    </DropPool>
  </div>
)

const CavesChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <CavesRegionChecks /> : <ClassicChecks />
}

export default CavesChecks
