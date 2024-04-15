import {
  useChunkyMedalInLogic,
  useChunkyMedalOutLogic
} from '@renderer/hooks/factory/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <FactoryCheck
      id={3104}
      name="Factory Chunky Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
