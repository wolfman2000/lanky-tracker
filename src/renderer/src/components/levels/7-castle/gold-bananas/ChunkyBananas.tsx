import {
  useCastleShedEnemies,
  useCastleTree,
  usePlayCastle,
  useSlamCastle
} from '@renderer/hooks/castle'
import { useBoulderTech, usePineapple, usePunch, useSniper } from '@renderer/hooks/kongs'
import { useHardShooting } from '@renderer/hooks/settings'
import CastleCheck from '../CastleCheck'

const ChunkyBananas: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const tree = useCastleTree()
  const shed = useCastleShedEnemies()
  const punch = usePunch()
  const pineapple = usePineapple()
  const sniper = useSniper()
  const boulderTech = useBoulderTech()
  const hardShooting = useHardShooting()
  return (
    <>
      <CastleCheck
        id={7040}
        name="Castle Chunky Tree"
        region="Castle Surroundings"
        canGetLogic={tree && punch && pineapple && (sniper || hardShooting)}
        canGetBreak={tree && punch && pineapple}
      />
      <CastleCheck
        id={7041}
        name="Castle Chunky Shed"
        region="Castle Surroundings"
        canGetLogic={shed.in}
        canGetBreak={shed.out}
      />
      <CastleCheck
        id={7042}
        name="Castle Chunky Museum"
        region="Castle Rooms"
        canGetLogic={inStage && boulderTech && canSlam && punch}
      />
      <CastleCheck
        id={7043}
        name="Castle Chunky Crypt"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && punch}
      />
    </>
  )
}

export default ChunkyBananas
