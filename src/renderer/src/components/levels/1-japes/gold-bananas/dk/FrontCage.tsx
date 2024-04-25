import { useDkFreebieGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FrontCage: React.FC = () => (
  <JapesCheck
    id={1001}
    name="Japes Donkey Front of Diddy Cage"
    region="Japes Hillside"
    canGetLogic={useDkFreebieGb()}
  />
)

export default FrontCage
