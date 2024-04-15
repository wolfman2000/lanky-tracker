import { useDkBlastGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const FreeLlama: React.FC = () => {
  const blastGb = useDkBlastGb()
  return (
    <AztecCheck
      id={2001}
      name="Aztec Donkey Free Llama Blast"
      region="Aztec Oasis And Totem Area"
      canGetLogic={blastGb.in}
      canGetBreak={blastGb.out}
    />
  )
}

export default FreeLlama
