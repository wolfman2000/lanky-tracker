import { useDiddyCageGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MillWinch: React.FC = () => (
  <ForestCheck
    id={5012}
    name="Forest Diddy Winch Cage"
    region="Forest Mills"
    canGetLogic={useDiddyCageGb()}
  />
)

export default MillWinch
