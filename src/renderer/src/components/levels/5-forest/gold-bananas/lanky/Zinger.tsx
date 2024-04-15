import { useLankyMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ZingerBounce: React.FC = () => {
  const mushGb = useLankyMushGb()
  return (
    <ForestCheck
      id={5023}
      name="Forest Lanky Zinger Bounce"
      region="Giant Mushroom Insides"
      canGetLogic={mushGb.in}
      canGetBreak={mushGb.out}
    />
  )
}

export default ZingerBounce
