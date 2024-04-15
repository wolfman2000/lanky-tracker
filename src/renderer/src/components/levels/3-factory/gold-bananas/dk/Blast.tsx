import { useDkBlastGb } from '@renderer/hooks/factory'
import { useFastArcade } from '@renderer/hooks/fast-checks'
import FactoryCheck from '../../check'

const FactoryBlast: React.FC = () => {
  const desc = 'Factory Donkey Blast' + (useFastArcade() ? '' : ' + Arcade Round 1')
  return (
    <FactoryCheck id={3003} name={desc} region="Storage And Arcade" canGetLogic={useDkBlastGb()} />
  )
}

export default FactoryBlast
