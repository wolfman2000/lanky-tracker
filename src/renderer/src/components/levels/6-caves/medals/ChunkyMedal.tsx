import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/caves/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../CavesCheck'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CavesCheck
      id={6104}
      name="Caves Chunky Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
