import { useDiddyTopGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomTop: React.FC = () => {
  const topGb = useDiddyTopGb()
  return (
    <ForestCheck
      id={5010}
      name="Forest Diddy Top of Mushroom Barrel"
      region="Giant Mushroom Exterior"
      canGetLogic={topGb.in}
      canGetBreak={topGb.out}
    />
  )
}

export default MushroomTop
