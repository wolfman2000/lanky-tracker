import { useTinyKlaptrapGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const TinyKlaptrap: React.FC = () => {
  const klaptrapGb = useTinyKlaptrapGb()
  return (
    <AztecCheck
      id={2030}
      name="Aztec Tiny Klaptrap Room"
      region="Tiny Temple"
      canGetLogic={klaptrapGb.in}
      canGetBreak={klaptrapGb.out}
    />
  )
}

export default TinyKlaptrap
