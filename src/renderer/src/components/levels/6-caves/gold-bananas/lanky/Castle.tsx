import { useLankyCastleGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CastleSlam: React.FC = () => (
  <CavesCheck
    id={6021}
    name="Caves Lanky Ice Castle Slam Challenge"
    region="Main Caves Area"
    canGetLogic={useLankyCastleGb()}
  />
)

export default CastleSlam
