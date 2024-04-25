import { useTinyCaveGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const MiniBarrel: React.FC = () => (
  <CavesCheck
    id={6030}
    name="Caves Tiny Mini Cave Barrel"
    region="Main Caves Area"
    canGetLogic={useTinyCaveGb()}
  />
)

export default MiniBarrel
