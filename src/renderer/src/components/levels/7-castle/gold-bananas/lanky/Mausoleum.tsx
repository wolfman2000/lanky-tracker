import { useLankyMausoleumGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyMausoleum: React.FC = () => {
  const mausoleumGb = useLankyMausoleumGb()
  return (
    <CastleCheck
      id={7022}
      name="Castle Lanky Mausoleum"
      region="Castle Underground"
      canGetLogic={mausoleumGb.in}
      canGetBreak={mausoleumGb.out}
    />
  )
}

export default LankyMausoleum
