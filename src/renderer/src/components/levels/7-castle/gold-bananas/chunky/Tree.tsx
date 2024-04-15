import { useChunkyTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyTree: React.FC = () => {
  const treeGb = useChunkyTreeGb()
  return (
    <CastleCheck
      id={7040}
      name="Castle Chunky Tree Sniping Barrel"
      region="Castle Surroundings"
      canGetLogic={treeGb.in}
      canGetBreak={treeGb.out}
    />
  )
}

export default ChunkyTree
