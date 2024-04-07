import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/aztec/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../AztecCheck'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <AztecCheck
      id={2102}
      name="Aztec Lanky Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
