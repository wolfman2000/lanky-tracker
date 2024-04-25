import { useLankyGoldGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const LankyGold: React.FC = () => {
  const goldGb = useLankyGoldGb()
  return (
    <GalleonCheck
      id={4021}
      name="Galleon Lanky Gold Tower Barrel"
      region="Treasure Room"
      canGetLogic={goldGb.in}
      canGetBreak={goldGb.out}
    />
  )
}

export default LankyGold
