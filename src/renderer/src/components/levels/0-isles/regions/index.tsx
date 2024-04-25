import ShuffledArenas from '../arenas/Shuffled'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirtLocations from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import JetpacCheck from '../jetpac'
import ShuffledKasplats from '../kasplats/Shuffled'
import ShopLocations from '../shops'
import AztecLobbyChecks from './AztecLobby'
import CastleLobbyChecks from './CastleLobby'
import CavesLobbyChecks from './CavesLobby'
import DiddyAirspaceChecks from './DiddyAirspace'
import FactoryLobbyChecks from './FactoryLobby'
import ForestLobbyChecks from './ForestLobby'
import GalleonLobbyChecks from './GalleonLobby'
import HelmLobbyChecks from './HelmLobby'
import IslesMainChecks from './IslesMain'
import IslesMainUpperChecks from './IslesMainUpper'
import JapesLobbyChecks from './JapesLobby'
import KremBaseChecks from './KremBase'
import KremLiftChecks from './KremLiftChecks'
import KremTopChecks from './KremTop'
import OuterIslesChecks from './OuterIsles'
import PrisonChecks from './Prison'
import SnideRoomChecks from './SnideRoom'
import TrainingGroundsChecks from './TrainingGrounds'

const IslesRegionChecks: React.FC = () => (
  <div className="grid">
    <TrainingGroundsChecks />
    <IslesMainChecks />
    <IslesMainUpperChecks />
    <DiddyAirspaceChecks />
    <OuterIslesChecks />
    <PrisonChecks />
    <KremBaseChecks />
    <KremLiftChecks />
    <SnideRoomChecks />
    <KremTopChecks />
    <JapesLobbyChecks />
    <AztecLobbyChecks />
    <FactoryLobbyChecks />
    <GalleonLobbyChecks />
    <ForestLobbyChecks />
    <CavesLobbyChecks />
    <CastleLobbyChecks />
    <HelmLobbyChecks />
    <ShuffledKasplats />
    <ShuffledCrates />
    <ShuffledDirtLocations />
    <ShuffledFairies />
    <ShuffledArenas />
    <ShopLocations />
    <JetpacCheck />
  </div>
)

export default IslesRegionChecks
