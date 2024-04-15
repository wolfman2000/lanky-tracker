import { useTinyChasmGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyChasm: React.FC = () => (
  <CastleCheck
    id={7033}
    name="Castle Tiny Over Chasm"
    region="Castle Underground"
    canGetLogic={useTinyChasmGb()}
  />
)

export default TinyChasm
