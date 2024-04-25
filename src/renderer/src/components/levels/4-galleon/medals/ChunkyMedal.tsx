import {
  useChunkyMedalInLogic,
  useChunkyMedalOutLogic
} from '@renderer/hooks/galleon/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <GalleonCheck
      id={4104}
      name="Galleon Chunky Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
