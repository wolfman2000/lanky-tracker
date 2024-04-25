import { useDkBlastGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const BaboonBlast: React.FC = () => (
  <JapesCheck
    id={1004}
    name="Japes Donkey Baboon Blast"
    region="Japes Lowlands"
    canGetLogic={useDkBlastGb()}
  />
)

export default BaboonBlast
