import { useLankyGreenhouseGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyGreenhouse: React.FC = () => (
  <CastleCheck
    id={7021}
    name="Castle Lanky Greenhouse"
    region="Castle Surroundings"
    canGetLogic={useLankyGreenhouseGb()}
  />
)

export default LankyGreenhouse
