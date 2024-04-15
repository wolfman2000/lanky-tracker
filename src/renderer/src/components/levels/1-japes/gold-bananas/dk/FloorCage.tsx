import { useDkCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

export const FloorCage: React.FC = () => (
  <JapesCheck
    id={1003}
    name="Japes Donkey Floor Cage Banana"
    region="Japes Lowlands"
    canGetLogic={useDkCagedGb()}
  />
)

export default FloorCage
