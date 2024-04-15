import { useDiddyBlockGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const BlockTower: React.FC = () => {
  const blockGb = useDiddyBlockGb()
  return (
    <FactoryCheck
      id={3010}
      name="Factory Diddy Block Tower"
      region="Testing Area"
      canGetLogic={blockGb.in}
      canGetBreak={blockGb.out}
    />
  )
}

export default BlockTower
