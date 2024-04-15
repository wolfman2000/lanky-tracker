import { useDkBarnGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const DkBarn: React.FC = () => {
  const barnGb = useDkBarnGb()
  return (
    <ForestCheck
      id={5004}
      name="Forest Donkey Thornvine Barn Barrel"
      region="Forest Mills"
      canGetLogic={barnGb.in}
      canGetBreak={barnGb.out}
    />
  )
}

export default DkBarn
