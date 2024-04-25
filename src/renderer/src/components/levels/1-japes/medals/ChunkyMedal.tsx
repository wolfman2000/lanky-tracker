import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/japes/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <JapesCheck
      id={1104}
      name="Japes Chunky Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
