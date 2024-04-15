import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/factory/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <FactoryCheck
      id={3103}
      name="Factory Tiny Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
