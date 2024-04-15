import { useDiddyGoldGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const DiddyGold: React.FC = () => {
  const goldGb = useDiddyGoldGb()
  return (
    <GalleonCheck
      id={4011}
      name="Galleon Diddy Gold Tower Barrel"
      region="Treasure Room"
      canGetLogic={goldGb.in}
      canGetBreak={goldGb.out}
    />
  )
}

export default DiddyGold
