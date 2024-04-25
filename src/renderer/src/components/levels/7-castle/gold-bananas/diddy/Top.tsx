import { useDiddyTopGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const CastleTop: React.FC = () => (
  <CastleCheck
    id={7010}
    name="Castle Diddy Above Castle"
    region="Castle Surroundings"
    canGetLogic={useDiddyTopGb()}
  />
)

export default CastleTop
