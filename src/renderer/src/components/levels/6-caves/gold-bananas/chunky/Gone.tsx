import { useChunkyGoneGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const EarlyGone: React.FC = () => (
  <CavesCheck
    id={6040}
    name="Caves Chunky Gorilla Gone"
    region="Main Caves Area"
    canGetLogic={useChunkyGoneGb()}
  />
)

export default EarlyGone
