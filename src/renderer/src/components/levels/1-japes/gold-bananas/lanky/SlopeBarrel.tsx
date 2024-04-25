import { useLankySlopeGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const SlopeBarrel: React.FC = () => {
  const slopeGb = useLankySlopeGb()
  return (
    <JapesCheck
      id={1022}
      name="Japes Lanky Slope Barrel"
      region="Stormy Tunnel Area"
      canGetLogic={slopeGb.in}
      canGetBreak={slopeGb.out}
    />
  )
}

export default SlopeBarrel
