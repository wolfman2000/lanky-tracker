import ArenaPool from '@renderer/components/pools/Arenas'
import { useAztecFront, useAztecTinyTemple, useSlamAztec } from '@renderer/hooks/aztec'
import { useAnyGun, useAnyKong, useDive, useGrape, useLanky } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const templeTiny = useAztecTinyTemple()
  const dive = useDive()
  const canSlam = useSlamAztec()
  const lanky = useLanky()
  const grape = useGrape()
  const anyGun = useAnyGun()
  return (
    <AztecCheck
      id={2090}
      name="Aztec Arena"
      region="Tiny Temple"
      canGetLogic={templeTiny.in && dive && canSlam && lanky && grape}
      canGetBreak={logicBreak(templeTiny) && dive && canSlam && lanky && anyGun}
    />
  )
}

const Shuffled: React.FC = () => {
  const inStage = useAztecFront()
  const anyKong = useAnyKong()
  return (
    <>
      <AztecCheck
        id={2190}
        name="Aztec Arena"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
