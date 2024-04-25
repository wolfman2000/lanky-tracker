import { useLankyPianoGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PianoGame: React.FC = () => (
  <FactoryCheck
    id={3021}
    name="Factory Lanky Piano Game"
    region="R&D Area"
    canGetLogic={useLankyPianoGb()}
  />
)

export default PianoGame
