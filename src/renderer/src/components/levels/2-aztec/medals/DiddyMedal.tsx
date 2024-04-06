import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/aztec/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../AztecCheck'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <AztecCheck
      id={2101}
      name="Aztec Diddy Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
