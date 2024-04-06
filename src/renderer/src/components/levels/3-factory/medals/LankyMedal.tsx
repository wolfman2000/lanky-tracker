import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/factory/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../FactoryCheck'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <FactoryCheck
      id={3102}
      name="Factory Lanky Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
