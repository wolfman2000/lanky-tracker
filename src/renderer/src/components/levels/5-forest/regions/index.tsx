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
import CenterChecks from './Center'
import MushExteriorChecks from './MushExterior'
import MushInteriorChecks from './MushInterior'
import OwlChecks from './Owl'
import MillsChecks from './Mills'

const ForestRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <CenterChecks />
    <MushExteriorChecks />
    <MushInteriorChecks />
    <OwlChecks />
    <MillsChecks />
    <ShuffledKasplats />
    <ShuffledCrates />
    <ShuffledDirtLocations />
    <ShuffledFairies />
    <ShuffledArenas />
    <ShopLocations />
    <BossCheck />
  </div>
)

export default ForestRegionChecks
