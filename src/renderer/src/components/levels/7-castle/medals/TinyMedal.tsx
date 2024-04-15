import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/castle/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <CastleCheck
      id={7103}
      name="Castle Tiny Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
