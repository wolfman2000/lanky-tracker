import { useLankyMillGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const LankyMill: React.FC = () => {
  const millGb = useLankyMillGb()
  return (
    <ForestCheck
      id={5020}
      name="Forest Lanky Attic Shooting"
      region="Forest Mills"
      canGetLogic={millGb.in}
      canGetBreak={millGb.out}
    />
  )
}

export default LankyMill
