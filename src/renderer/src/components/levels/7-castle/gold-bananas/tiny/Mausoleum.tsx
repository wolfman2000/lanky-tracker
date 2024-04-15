import { useTinyMausoleumGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyMausoleum: React.FC = () => {
  const mausoleumGb = useTinyMausoleumGb()
  return (
    <CastleCheck
      id={7032}
      name="Castle Tiny Mausoleum"
      region="Castle Underground"
      canGetLogic={mausoleumGb.in}
      canGetBreak={mausoleumGb.out}
    />
  )
}

export default TinyMausoleum
