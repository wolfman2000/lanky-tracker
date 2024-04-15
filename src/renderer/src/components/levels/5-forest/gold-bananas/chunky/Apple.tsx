import { useChunkyAppleGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyApple: React.FC = () => (
  <ForestCheck
    id={5043}
    name="Forest Chunky Apple Rescue"
    region="Forest Center And Beanstalk"
    canGetLogic={useChunkyAppleGb()}
  />
)

export default ChunkyApple
