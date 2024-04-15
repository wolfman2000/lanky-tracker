import BeetleRace from './Beetle'
import TinyDoorTemple from './Door'
import TinyKlaptrap from './Klaptrap'
import LavaPedestal from './Lava'

const TinyBananas: React.FC = () => (
  <>
    <TinyKlaptrap />
    <TinyDoorTemple />
    <BeetleRace />
    <LavaPedestal />
  </>
)

export default TinyBananas
