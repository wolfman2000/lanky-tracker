import { useDkFreeDiddyGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FreeDiddy: React.FC = () => (
  <JapesCheck
    id={1002}
    name="Japes Free Diddy Item"
    region="Japes Hillside"
    canGetLogic={useDkFreeDiddyGb()}
  />
)

export default FreeDiddy
