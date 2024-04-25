import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/castle/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CastleCheck
      id={7104}
      name="Castle Chunky Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
