import BeanstalkDirt from '../dirt/Beanstalk'
import CenterEnemies from '../enemies/Center'
import ChunkyApple from '../gold-bananas/chunky/Apple'
import ChunkyMinecart from '../gold-bananas/chunky/Minecart'
import BeanCheck from '../gold-bananas/tiny/BeanCheck'

const CenterChecks: React.FC = () => (
  <>
    <BeanCheck />
    <ChunkyApple />
    <ChunkyMinecart />
    <BeanstalkDirt />
    <CenterEnemies />
  </>
)

export default CenterChecks
