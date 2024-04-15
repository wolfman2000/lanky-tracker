import { useDkProdGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const CrusherRoom: React.FC = () => {
  const prodGb = useDkProdGb()
  return (
    <FactoryCheck
      id={3004}
      name="Factory Donkey Crusher Room"
      region="Production Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
  )
}

export default CrusherRoom
