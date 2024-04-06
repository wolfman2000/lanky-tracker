import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/forest/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../ForestCheck'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <ForestCheck
      id={5101}
      name="Forest Diddy Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
