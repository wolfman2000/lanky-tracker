import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/caves/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CavesCheck
      id={6100}
      name="Caves Donkey Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
