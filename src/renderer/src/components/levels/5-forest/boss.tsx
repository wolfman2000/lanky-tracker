import BossPool from '@renderer/components/pools/Bosses'
import { usePlayForest } from '@renderer/hooks/forest'
import { useAnyKong } from '@renderer/hooks/kongs'
import ForestCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <ForestCheck
        id={5105}
        name="Forest Boss Defeated"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
