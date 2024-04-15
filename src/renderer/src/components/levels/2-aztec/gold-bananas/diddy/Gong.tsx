import { useDiddyGongGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const RamGongs: React.FC = () => {
  const gongGb = useDiddyGongGb()
  return (
    <AztecCheck
      id={2011}
      name="Aztec Diddy Ram Gongs"
      region="Aztec Oasis And Totem Area"
      canGetLogic={gongGb.in}
      canGetBreak={gongGb.out}
    />
  )
}

export default RamGongs
