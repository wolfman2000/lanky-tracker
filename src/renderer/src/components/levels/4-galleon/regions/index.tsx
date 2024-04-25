import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import ShuffledArenas from '../arenas/Shuffled'
import BossCheck from '../boss'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirtLocations from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import ShuffledKasplats from '../kasplats/Shuffled'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import CavernsChecks from './Caverns'
import LighthouseChecks from './Lighthouse'
import OutskirtsChecks from './Outskirts'
import FiveShipChecks from './Ship'
import TreasureChecks from './Treasure'

const GalleonRegionChecks: React.FC = () => (
  <>
    <div className="grid">
      <BananaMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </BananaMedalPool>
      <CavernsChecks />
      <LighthouseChecks />
      <OutskirtsChecks />
      <TreasureChecks />
      <FiveShipChecks />
      <ShuffledKasplats />
      <ShuffledCrates />
      <ShuffledDirtLocations />
      <ShuffledFairies />
      <ShuffledArenas />
      <ShopLocations />
      <BossCheck />
    </div>
  </>
)

export default GalleonRegionChecks
