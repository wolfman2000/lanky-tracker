import { useChunkyUndergroundGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Underground: React.FC = () => {
  const chunkyUndergroundGb = useChunkyUndergroundGb()
  return (
    <JapesCheck
      id={1043}
      name="Japes Chunky Underground"
      region="Japes Caves And Mines"
      canGetLogic={chunkyUndergroundGb.in}
      canGetBreak={chunkyUndergroundGb.out}
    />
  )
}

export default Underground
