import { useTinyLavaGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const LavaPedestal: React.FC = () => {
  const lavaGb = useTinyLavaGb()
  return (
    <AztecCheck
      id={2033}
      name="Aztec Tiny Llama Temple Lava Pedestals"
      region="Llama Temple"
      canGetLogic={lavaGb.in}
      canGetBreak={lavaGb.out}
    />
  )
}

export default LavaPedestal
