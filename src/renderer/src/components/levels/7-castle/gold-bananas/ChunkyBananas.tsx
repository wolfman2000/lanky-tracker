import { useCastleTree, usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useAnyMusic,
  useBoulderTech,
  useGone,
  usePineapple,
  usePunch,
  useSniper,
  useTriangle
} from '@renderer/hooks/kongs'
import { useHardShooting } from '@renderer/hooks/settings'
import CastleCheck from '../CastleCheck'

const ChunkyBananas: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const tree = useCastleTree()
  const punch = usePunch()
  const pineapple = usePineapple()
  const sniper = useSniper()
  const triangle = useTriangle()
  const boulderTech = useBoulderTech()
  const gone = useGone()
  const anyMusic = useAnyMusic()
  const hardShooting = useHardShooting()
  return (
    <>
      <CastleCheck
        id={7040 /* TODO: Hard shoot settings */}
        name="Castle Chunky Tree"
        region="Castle Surroundings"
        canGetLogic={tree && punch && pineapple && (sniper || hardShooting)}
        canGetBreak={tree && punch && pineapple}
      />
      <CastleCheck
        id={7041}
        name="Castle Chunky Shed"
        region="Castle Surroundings"
        canGetLogic={inStage && punch && (triangle || (gone && pineapple))}
        canGetBreak={inStage && punch && anyMusic}
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
