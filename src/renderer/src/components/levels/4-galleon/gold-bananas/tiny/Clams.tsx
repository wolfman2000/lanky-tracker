import MiscPool from '@renderer/components/pools/Misc'
import { useTinyClams } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const TreasureClams: React.FC = () => {
  const clams = useTinyClams()
  return (
    <MiscPool>
      <GalleonCheck
        id={4034}
        name="Galleon Tiny Treasure Chest Clams x5"
        region="Treasure Room"
        canGetLogic={clams.in}
        canGetBreak={clams.out}
      />
    </MiscPool>
  )
}

export default TreasureClams
