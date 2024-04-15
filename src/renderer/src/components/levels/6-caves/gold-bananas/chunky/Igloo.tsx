import { useChunkyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyIgloo: React.FC = () => (
  <CavesCheck
    id={6042}
    name="Caves Chunky 5 Door Igloo"
    region="Igloo Area"
    canGetLogic={useChunkyIglooGb()}
  />
)

export default ChunkyIgloo
