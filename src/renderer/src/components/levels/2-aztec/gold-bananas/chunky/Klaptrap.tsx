import { useChunkyKlaptrapGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const ChunkyKlaptrap: React.FC = () => {
  const klaptrapGb = useChunkyKlaptrapGb()
  return (
    <AztecCheck
      id={2041}
      name="Aztec Chunky Klaptrap Room"
      region="Tiny Temple"
      canGetLogic={klaptrapGb.in}
      canGetBreak={klaptrapGb.out}
    />
  )
}

export default ChunkyKlaptrap
