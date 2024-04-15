import { useTinyMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomBarrel: React.FC = () => (
  <ForestCheck
    id={5030}
    name="Forest Tiny Mushroom Barrel"
    region="Giant Mushroom Insides"
    canGetLogic={useTinyMushGb()}
  />
)

export default MushroomBarrel
