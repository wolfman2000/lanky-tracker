import { useDkMillGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const DkMill: React.FC = () => {
  const millGb = useDkMillGb()
  return (
    <ForestCheck
      id={5003}
      name="Forest Donkey Mill Levers"
      region="Forest Mills"
      canGetLogic={millGb.in}
      canGetBreak={millGb.out}
    />
  )
}

export default DkMill
