import { useDiddyRaftersGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const DarkRafters: React.FC = () => {
  const raftersGb = useDiddyRaftersGb()
  return (
    <ForestCheck
      id={5013}
      name="Forest Diddy Dark Rafters"
      region="Forest Mills"
      canGetLogic={raftersGb.in}
      canGetBreak={raftersGb.out}
    />
  )
}

export default DarkRafters
