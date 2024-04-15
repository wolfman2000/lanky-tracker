import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/aztec/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <AztecCheck
      id={2104}
      name="Aztec Chunky Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
