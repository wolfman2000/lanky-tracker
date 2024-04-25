import BossPool from '@renderer/components/pools/Bosses'
import { useJapesRambi, useJapesSideArea, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong, useVine } from '@renderer/hooks/kongs'
import JapesCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  const vine = useVine()
  const japesRambi = useJapesRambi()
  const japesSide = useJapesSideArea()
  return (
    <BossPool>
      <JapesCheck
        id={1105}
        name="Japes Boss Defeated"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong && (vine || japesSide || japesRambi)}
        canGetBreak={inStage && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
