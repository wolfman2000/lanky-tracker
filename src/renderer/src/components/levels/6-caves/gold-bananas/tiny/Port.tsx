import { useTinyPortGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const MonkeyportIgloo: React.FC = () => {
  const portGb = useTinyPortGb()
  return (
    <CavesCheck
      id={6031}
      name="Caves Tiny Monkeyport Igloo"
      region="Igloo Area"
      canGetLogic={portGb.in}
      canGetBreak={portGb.out}
    />
  )
}

export default MonkeyportIgloo
