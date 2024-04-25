import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MushroomArena from './arenas/Mushroom'
import ShuffledArenas from './arenas/Shuffled'
import BossCheck from './boss'
import CrateLocations from './crates'
import ShuffledCrates from './crates/Shuffled'
import DirtLocations from './dirt'
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
import ForestRegionChecks from './regions'
import ForestShops from './shops'

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
    <DirtLocations />
    <ShuffledDirtLocations />
    <FairyLocations />
    <ShuffledFairies />
    <MushroomArena />
    <ShuffledArenas />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BossCheck />
    <ForestShops />
    <DropPool>
      <EnemyLocations />
    </DropPool>
  </div>
)

const ForestChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <ForestRegionChecks /> : <ClassicChecks />
}

export default ForestChecks
