import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/japes/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <JapesCheck
      id={1103}
      name="Japes Tiny Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
