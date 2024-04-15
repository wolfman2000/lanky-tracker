import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/caves/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CavesCheck
      id={6102}
      name="Caves Lanky Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
