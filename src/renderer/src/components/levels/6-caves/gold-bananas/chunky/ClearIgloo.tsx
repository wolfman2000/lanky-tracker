import { useChunkyClearGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TransparentIgloo: React.FC = () => {
  const clearGb = useChunkyClearGb()
  return (
    <CavesCheck
      id={6041}
      name="Caves Chunky Transparent Igloo"
      region="Igloo Area"
      canGetLogic={clearGb.in}
      canGetBreak={clearGb.out}
    />
  )
}

export default TransparentIgloo
