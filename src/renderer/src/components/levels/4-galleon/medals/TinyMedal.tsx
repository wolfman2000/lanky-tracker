import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/galleon/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <GalleonCheck
      id={4103}
      name="Galleon Tiny Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
