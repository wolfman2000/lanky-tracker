import { useLankyTestingGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TestingBarrel: React.FC = () => {
  const testGb = useLankyTestingGb()
  return (
    <FactoryCheck
      id={3020}
      name="Factory Lanky Testing Room Barrel"
      region="Testing Area"
      canGetLogic={testGb.in}
      canGetBreak={testGb.out}
    />
  )
}

export default TestingBarrel
