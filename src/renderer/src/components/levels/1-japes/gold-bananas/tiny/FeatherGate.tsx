import { useTinyGateGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FeatherGate: React.FC = () => (
  <JapesCheck
    id={1031}
    name="Japes Tiny Feather Gate Barrel"
    region="Japes Lowlands"
    canGetLogic={useTinyGateGb()}
  />
)

export default FeatherGate
