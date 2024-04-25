import { useChunkyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const ChunkyTimedCage: React.FC = () => {
  const cage = useChunkyCagedGb()
  return (
    <JapesCheck
      id={1041}
      name="Japes Chunky Timed Caged Banana"
      region="Japes Hillside"
      canGetLogic={cage}
    />
  )
}

export default ChunkyTimedCage
