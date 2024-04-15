import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/factory/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <FactoryCheck
      id={3101}
      name="Factory Diddy Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
