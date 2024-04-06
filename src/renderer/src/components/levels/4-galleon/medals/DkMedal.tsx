import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/galleon/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import GalleonCheck from '../GalleonCheck'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <GalleonCheck
      id={4100}
      name="Galleon DK Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
