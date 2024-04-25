import RNDArena from '../arenas/Research'
import RNDEnemies from '../enemies/Research'
import ToyMonster from '../gold-bananas/chunky/Kaiju'
import ChargeTest from '../gold-bananas/diddy/Charge'
import PianoGame from '../gold-bananas/lanky/Piano'
import CarRace from '../gold-bananas/tiny/Race'
import LankyKasplat from '../kasplats/Lanky'

const RNDChecks: React.FC = () => (
  <>
    <PianoGame />
    <ChargeTest />
    <ToyMonster />
    <LankyKasplat />
    <RNDArena />
    <RNDEnemies />
    <CarRace />
  </>
)

export default RNDChecks
