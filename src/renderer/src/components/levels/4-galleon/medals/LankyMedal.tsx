import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/galleon/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import GalleonCheck from '../GalleonCheck'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <GalleonCheck
      id={4102}
      name="Galleon Lanky Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
