import FunkyArena from '../arenas/Funky'
import MountainCrate from '../crates/Mountain'
import PaintingHillDirt from '../dirt/PaintingHill'
import JapesMainEnemies from '../enemies/JapesMain'
import ChunkyTimedCage from '../gold-bananas/chunky/TimedCage'
import DiddyTimedCage from '../gold-bananas/diddy/TimedCage'
import FreeDiddy from '../gold-bananas/dk/FreeDiddy'
import FrontCage from '../gold-bananas/dk/FrontCage'
import LankyTimedCage from '../gold-bananas/lanky/TimedCage'
import TinyTimedCage from '../gold-bananas/tiny/TimedCage'

const JapesMainChecks: React.FC = () => (
  <>
    <FrontCage />
    <DiddyTimedCage />
    <LankyTimedCage />
    <TinyTimedCage />
    <ChunkyTimedCage />
    <FreeDiddy />
    <FunkyArena />
    <PaintingHillDirt />
    <MountainCrate />
    <JapesMainEnemies />
  </>
)

export default JapesMainChecks
