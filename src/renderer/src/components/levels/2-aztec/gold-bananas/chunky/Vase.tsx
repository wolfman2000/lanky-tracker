import { useChunkyVaseGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VaseBanana: React.FC = () => {
  const vaseGb = useChunkyVaseGb()
  return (
    <AztecCheck
      id={2040}
      name="Aztec Chunky Vases"
      region="Various Aztec Tunnels"
      canGetLogic={vaseGb.in}
      canGetBreak={vaseGb.out}
    />
  )
}

export default VaseBanana
