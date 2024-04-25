import { useTinyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyProduction: React.FC = () => {
  const prodGb = useTinyProductionGb()
  return (
    <FactoryCheck
      id={3033}
      name="Factory Tiny Production Room"
      region="Production Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
  )
}

export default TinyProduction
