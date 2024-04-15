import { useDiddyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyIgloo: React.FC = () => (
  <CavesCheck
    id={6011}
    name="Caves Diddy 5 Door Igloo"
    region="Igloo Area"
    canGetLogic={useDiddyIglooGb()}
  />
)

export default DiddyIgloo
