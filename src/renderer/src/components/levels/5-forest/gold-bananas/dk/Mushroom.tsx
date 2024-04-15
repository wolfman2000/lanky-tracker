import { useDkMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomCannon: React.FC = () => (
  <ForestCheck
    id={5002}
    name="Forest Donkey Mushroom Cannons"
    region="Giant Mushroom Insides"
    canGetLogic={useDkMushGb()}
  />
)

export default MushroomCannon
