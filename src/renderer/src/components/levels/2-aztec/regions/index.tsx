import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import ShuffledArenas from '../arenas/Shuffled'
import BossCheck from '../boss'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirtLocations from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import QuicksandTunnel from '../gold-bananas/dk/Quicksand'
import ShuffledKasplats from '../kasplats/Shuffled'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import BeforeOasisChecks from './BeforeOasis'
import ConnectorTunnelChecks from './Connector'
import DoorTempleChecks from './DoorTemple'
import LlamaTempleChecks from './Llama'
import OasisChecks from './Oasis'
import TinyStartChecks from './TinyStart'
import TinySwimChecks from './TinySwim'
import TotemChecks from './Totem'

const AztecRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BeforeOasisChecks />
    <ConnectorTunnelChecks />
    <QuicksandTunnel />
    <OasisChecks />
    <TotemChecks />
    <TinyStartChecks />
    <TinySwimChecks />
    <DoorTempleChecks />
    <LlamaTempleChecks />
    <ShuffledKasplats />
    <ShuffledCrates />
    <ShuffledDirtLocations />
    <ShuffledFairies />
    <ShuffledArenas />
    <ShopLocations />
    <BossCheck />
  </div>
)

export default AztecRegionChecks
