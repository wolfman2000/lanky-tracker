import BossPool from '@renderer/components/pools/Bosses'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useAnyKong } from '@renderer/hooks/kongs'
import CavesCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <CavesCheck
        id={6105}
        name="Caves Boss Defeated"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
