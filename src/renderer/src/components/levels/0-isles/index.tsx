import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaLocations from './arenas'
import ShuffledArenas from './arenas/Shuffled'
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
import JetpacCheck from './jetpac'
import KasplatLocations from './kasplats'
import ShuffledKasplats from './kasplats/Shuffled'
import IslesRegionChecks from './regions'
import ShopLocations from './shops'

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
    <ArenaLocations />
    <ShuffledArenas />
    <ShopLocations />
    <JetpacCheck />
    <EnemyLocations />
  </div>
)

const IsleChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <IslesRegionChecks /> : <ClassicChecks />
}

export default IsleChecks
