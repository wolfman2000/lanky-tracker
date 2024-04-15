import { useLankyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const LankyIgloo: React.FC = () => {
  const iglooGb = useLankyIglooGb()
  return (
    <CavesCheck
      id={6022}
      name="Caves Lanky 5 Door Igloo"
      region="Igloo Area"
      canGetLogic={iglooGb.in}
      canGetBreak={iglooGb.out}
    />
  )
}

export default LankyIgloo
