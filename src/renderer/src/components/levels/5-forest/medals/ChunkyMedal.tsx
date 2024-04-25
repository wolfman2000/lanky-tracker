import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/forest/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <ForestCheck
      id={5104}
      name="Forest Chunky Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
