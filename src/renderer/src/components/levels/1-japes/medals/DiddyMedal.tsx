import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/japes/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <JapesCheck
      id={1101}
      name="Japes Diddy Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
