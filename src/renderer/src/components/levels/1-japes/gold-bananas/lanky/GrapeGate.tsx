import { useLankyGateGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const GrapeGate: React.FC = () => (
  <JapesCheck
    id={1021}
    name="Japes Lanky Grape Gate Barrel"
    region="Japes Lowlands"
    canGetLogic={useLankyGateGb()}
  />
)

export default GrapeGate
