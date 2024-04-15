import { useDiddyCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyCrypt: React.FC = () => (
  <CastleCheck
    id={7012}
    name="Castle Diddy Crypt"
    region="Castle Underground"
    canGetLogic={useDiddyCryptGb()}
  />
)

export default DiddyCrypt
