import AztecRoof from './AztecRoof'
import CabinIsleDirt from './CabinIsle'
import CastleLobby from './CastleLobby'
import Hoard from './Hoard'
import PrisonDirt from './Prison'
import TrainingRear from './TrainingRear'
import UnderCaves from './UnderCaves'

const DirtLocations: React.FC = () => (
  <>
    <TrainingRear />
    <Hoard />
    <PrisonDirt />
    <UnderCaves />
    <AztecRoof />
    <CabinIsleDirt />
    <CastleLobby />
  </>
)

export default DirtLocations
