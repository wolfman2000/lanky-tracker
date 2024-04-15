import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FunkyArena from './arenas/Funky'
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
import ShuffledKasplats from './kasplats/Shuffled'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import JapesRegionChecks from './regions'
import JapesShops from './shops'

const ClassicChecks: React.FC = () => (
  <div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
    <KasplatLocations />
    <ShuffledKasplats />
    <CrateLocations />
    <ShuffledCrates />
    <DirtLocations />
    <ShuffledDirtLocations />
    <FairyLocations />
    <ShuffledFairies />
    <FunkyArena />
    <ShuffledArenas />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BossCheck />
    <JapesShops />
    <DropPool>
      <EnemyLocations />
    </DropPool>
  </div>
)

const JapesChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <JapesRegionChecks /> : <ClassicChecks />
}

export default JapesChecks
