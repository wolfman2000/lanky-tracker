import { useLankyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const EnguardeChest: React.FC = () => (
  <GalleonCheck
    id={4020}
    name="Galleon Lanky Enguarde Chest"
    region="Lighthouse Area"
    canGetLogic={useLankyChestGb()}
  />
)

export default EnguardeChest
