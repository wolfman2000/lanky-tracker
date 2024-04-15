import HiveOutsideEnemies from '../enemies/HiveOutside'
import HiveBarrel from '../gold-bananas/chunky/HiveBarrel'
import HiveStump from '../gold-bananas/tiny/HiveStump'

const HiveOutsideChecks: React.FC = () => (
  <>
    <HiveStump />
    <HiveBarrel />
    <HiveOutsideEnemies />
  </>
)

export default HiveOutsideChecks
