import BossPool from '@renderer/components/pools/Bosses'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useAnyKong } from '@renderer/hooks/kongs'
import AztecCheck from './check'

const BossCheck: React.FC = () => {
  const aztecFront = useAztecFront()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <AztecCheck
        id={2105}
        name="Aztec Boss Defeated"
        region="Troff 'N' Scoff"
        canGetLogic={aztecFront.in && anyKong}
        canGetBreak={aztecFront.out && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
