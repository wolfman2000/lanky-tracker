import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/castle/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../CastleCheck'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CastleCheck
      id={7102}
      name="Castle Lanky Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
