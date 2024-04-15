import { useDkRotateGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const RotatingCabin: React.FC = () => (
  <CavesCheck
    id={6003}
    name="Caves Donkey Rotating Cabin"
    region="Cabins Area"
    canGetLogic={useDkRotateGb()}
  />
)

export default RotatingCabin
