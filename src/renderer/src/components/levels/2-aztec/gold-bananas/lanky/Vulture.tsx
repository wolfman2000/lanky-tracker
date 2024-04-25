import { useLankyVultureGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VultureShoot: React.FC = () => {
  const vultureGb = useLankyVultureGb()
  return (
    <AztecCheck
      id={2020}
      name="Aztec Lanky Vulture Shooting"
      region="Tiny Temple"
      canGetLogic={vultureGb.in}
      canGetBreak={vultureGb.out}
    />
  )
}

export default VultureShoot
