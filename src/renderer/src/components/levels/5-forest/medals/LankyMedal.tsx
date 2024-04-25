import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/forest/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  return (
    <ForestCheck
      id={5102}
      name="Forest Lanky Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
