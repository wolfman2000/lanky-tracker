import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/aztec/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../AztecCheck'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <AztecCheck
      id={2103}
      name="Aztec Tiny Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
