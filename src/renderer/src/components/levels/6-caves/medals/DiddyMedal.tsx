import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/caves/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CavesCheck
      id={6101}
      name="Caves Diddy Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
