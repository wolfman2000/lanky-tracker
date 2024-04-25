import { useChunkyBoulderGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Boulder: React.FC = () => {
  const chunkyBoulderGb = useChunkyBoulderGb()
  return (
    <JapesCheck
      id={1040}
      name="Japes Chunky Boulder"
      region="Japes Lowlands"
      canGetLogic={chunkyBoulderGb}
    />
  )
}

export default Boulder
