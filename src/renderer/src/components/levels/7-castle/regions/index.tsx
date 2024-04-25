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
import BallroomChecks from './Ballroom'
import MuseumChecks from './Museum'
import RoomsChecks from './Rooms'
import SurroundingsChecks from './Surroundings'
import TreeChecks from './Tree'
import UndergroundChecks from './Underground'

const CastleRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <TreeChecks />
    <SurroundingsChecks />
    <MuseumChecks />
    <BallroomChecks />
    <RoomsChecks />
    <UndergroundChecks />
    <ShuffledKasplats />
    <ShuffledCrates />
    <ShuffledDirtLocations />
    <ShuffledFairies />
    <ShuffledArenas />
    <ShopLocations />
    <BossCheck />
  </div>
)

export default CastleRegionChecks
