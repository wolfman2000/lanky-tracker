import { useLankyMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomSlam: React.FC = () => {
  const mushGb = useLankyMushGb()
  return (
    <ForestCheck
      id={5021}
      name="Forest Lanky Colored Mushroom Slam"
      region="Giant Mushroom Insides"
      canGetLogic={mushGb.in}
      canGetBreak={mushGb.out}
    />
  )
}

export default MushroomSlam
