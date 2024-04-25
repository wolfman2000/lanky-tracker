import MushInteriorEnemies from '../enemies/MushInterior'
import ChunkyFace from '../gold-bananas/chunky/Face'
import MushroomCannon from '../gold-bananas/dk/Mushroom'
import MushroomSlam from '../gold-bananas/lanky/Slam'
import ZingerBounce from '../gold-bananas/lanky/Zinger'
import MushroomBarrel from '../gold-bananas/tiny/Mushroom'
import DiddyKasplat from '../kasplats/Diddy'

const MushInteriorChecks: React.FC = () => (
  <>
    <MushroomCannon />
    <MushroomBarrel />
    <DiddyKasplat />
    <MushroomSlam />
    <ZingerBounce />
    <ChunkyFace />
    <MushInteriorEnemies />
  </>
)

export default MushInteriorChecks
