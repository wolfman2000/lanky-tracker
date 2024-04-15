import TempleDirt from '../dirt/Temple'
import Chunky5Enemies from '../enemies/DoorChunky'
import Diddy5Enemies from '../enemies/DoorDiddy'
import Dk5Enemies from '../enemies/DoorDk'
import Lanky5Enemies from '../enemies/DoorLanky'
import Tiny5Enemies from '../enemies/DoorTiny'
import DoorFairy from '../fairies/Door'
import ChunkyDoorTemple from '../gold-bananas/chunky/Door'
import DiddyDoorTemple from '../gold-bananas/diddy/Door'
import DonkeyDoorTemple from '../gold-bananas/dk/Door'
import LankyDoorTemple from '../gold-bananas/lanky/Door'
import TinyDoorTemple from '../gold-bananas/tiny/Door'
import ChunkyKasplat from '../kasplats/Chunky'

const DoorTempleChecks: React.FC = () => (
  <>
    <DonkeyDoorTemple />
    <Dk5Enemies />
    <DiddyDoorTemple />
    <Diddy5Enemies />
    <LankyDoorTemple />
    <Lanky5Enemies />
    <TinyDoorTemple />
    <DoorFairy />
    <Tiny5Enemies />
    <ChunkyDoorTemple />
    <ChunkyKasplat />
    <TempleDirt />
    <Chunky5Enemies />
  </>
)

export default DoorTempleChecks
