import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useBalloon,
  useDiddy,
  useDk,
  useFeather,
  useGrape,
  useHoming,
  useLanky,
  useSniper,
  useSprint,
  useTrombone,
  useTwirl,
  useVine
} from '@renderer/hooks/kongs'
import CastleCheck from '../CastleCheck'

const LankyBananas: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const grape = useGrape()
  const feather = useFeather()
  const balloon = useBalloon()
  const sprint = useSprint()
  const trombone = useTrombone()
  const sniper = useSniper()
  const homing = useHoming()
  const lanky = useLanky()
  const dk = useDk()
  const diddy = useDiddy()
  const twirl = useTwirl()
  const vine = useVine()
  return (
    <>
      <CastleCheck
        id={7020}
        name="Castle Lanky Tower"
        region="Castle Rooms"
        canGetLogic={inStage && canSlam && grape && balloon && sniper}
        canGetBreak={inStage && canSlam && grape && balloon && homing}
      />
      <CastleCheck
        id={7021}
        name="Castle Lanky Greenhouse"
        region="Castle Surroundings"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7022}
        name="Castle Lanky Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && grape && sprint && vine}
        canGetBreak={inStage && lanky && (grape || feather) && (sprint || dk || diddy)}
      />
      <CastleCheck
        id={7023}
        name="Castle Lanky Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && canSlam && trombone && balloon}
        canGetBreak={inStage && canSlam && trombone && twirl}
      />
    </>
  )
}

export default LankyBananas
