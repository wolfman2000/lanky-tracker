import { useDiddyLighthouseGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const DiddyLighthouse: React.FC = () => {
  const shipGb = useDiddyLighthouseGb()
  return (
    <GalleonCheck
      id={4010}
      name="Galleon Diddy Top of Lighthouse"
      region="Lighthouse Area"
      canGetLogic={shipGb.in}
      canGetBreak={shipGb.out}
    />
  )
}

export default DiddyLighthouse
