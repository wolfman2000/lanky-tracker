import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/japes/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

/**
 * The logic of DK's Medal in Japes, wrapped neatly in this component.
 * @returns the check for DK's Medal in Japes.
 */
const DkMedal: React.FC = (): JSX.Element => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <JapesCheck
      id={1100}
      name="Japes Donkey Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
