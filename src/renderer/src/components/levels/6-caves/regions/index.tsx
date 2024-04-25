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
import MainChecks from './Main'
import IglooChecks from './Igloo'
import CabinsChecks from './Cabins'

const CavesRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <MainChecks />
    <IglooChecks />
    <CabinsChecks />
    <ShuffledKasplats />
    <ShuffledCrates />
    <ShuffledDirtLocations />
    <ShuffledFairies />
    <ShuffledArenas />
    <ShopLocations />
    <BossCheck />
  </div>
)

export default CavesRegionChecks
