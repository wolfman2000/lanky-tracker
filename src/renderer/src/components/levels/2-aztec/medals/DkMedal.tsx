import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/aztec/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../AztecCheck'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <AztecCheck
      id={2100}
      name="Aztec Donkey Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
