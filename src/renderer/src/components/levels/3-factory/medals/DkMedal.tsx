import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/factory/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../FactoryCheck'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <FactoryCheck
      id={3100}
      name="Factory Donkey Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
