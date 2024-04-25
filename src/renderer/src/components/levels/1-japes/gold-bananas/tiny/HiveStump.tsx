import { useTinyStumpGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveStump: React.FC = () => (
  <JapesCheck
    id={1032}
    name="Japes Tiny Stump"
    region="Hive Tunnel Area"
    canGetLogic={useTinyStumpGb()}
  />
)

export default HiveStump
