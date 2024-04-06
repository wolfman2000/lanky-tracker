import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/castle/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../CastleCheck'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CastleCheck
      id={7101}
      name="Castle Diddy Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
