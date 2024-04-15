import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/forest/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <ForestCheck
      id={5103}
      name="Forest Tiny Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
