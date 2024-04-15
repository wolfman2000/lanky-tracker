import { useDkIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DkIgloo: React.FC = () => {
  const iglooGb = useDkIglooGb()
  return (
    <CavesCheck
      id={6002}
      name="Caves Donkey 5 Door Igloo"
      region="Igloo Area"
      canGetLogic={iglooGb.in}
      canGetBreak={iglooGb.out}
    />
  )
}

export default DkIgloo
