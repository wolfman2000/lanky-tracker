import { useDkLighthouseGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const DkLighthouse: React.FC = () => {
  const lighthouseGb = useDkLighthouseGb()
  return (
    <GalleonCheck
      id={4001}
      name="Galleon Donkey Lighthouse"
      region="Lighthouse Area"
      canGetLogic={lighthouseGb.in}
      canGetBreak={lighthouseGb.out}
    />
  )
}

export default DkLighthouse
