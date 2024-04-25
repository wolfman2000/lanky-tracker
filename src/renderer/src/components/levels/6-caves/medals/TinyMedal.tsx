import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/caves/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CavesCheck
      id={6103}
      name="Caves Tiny Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
