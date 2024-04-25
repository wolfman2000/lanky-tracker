import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/forest/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <ForestCheck
      id={5100}
      name="Forest Donkey Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
