import { useDkCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkMinecart: React.FC = () => (
  <CastleCheck
    id={7003}
    name="Castle Donkey Minecart"
    region="Castle Underground"
    canGetLogic={useDkCryptGb()}
  />
)

export default DkMinecart
