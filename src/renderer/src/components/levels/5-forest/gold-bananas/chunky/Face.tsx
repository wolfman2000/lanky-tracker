import { useChunkyFaceGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyFace: React.FC = () => (
  <ForestCheck
    id={5041}
    name="Forest Chunky Face Puzzle"
    region="Giant Mushroom Insides"
    canGetLogic={useChunkyFaceGb()}
  />
)

export default ChunkyFace
