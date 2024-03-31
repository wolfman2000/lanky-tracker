import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useAnyGun,
  useDiddy,
  useDk,
  useFeather,
  useGrape,
  useHoming,
  useMini,
  useMonkeyport,
  useSax,
  useTwirl
} from '@renderer/hooks/kongs'
import { useHardShooting } from '@renderer/hooks/settings'
import CastleCheck from '../CastleCheck'

const TinyBananas: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const diddy = useDiddy()
  const port = useMonkeyport()
  const mini = useMini()
  const sax = useSax()
  const twirl = useTwirl()
  const homing = useHoming()
  const feather = useFeather()
  const grape = useGrape()
  const anyGun = useAnyGun()
  const dk = useDk()
  const hardShooting = useHardShooting()
  return (
    <>
      <CastleCheck
        id={7030}
        name="Castle Tiny Car Race"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && port && mini}
      />
      <CastleCheck
        id={7031}
        name="Castle Tiny Trash Can"
        region="Castle Surroundings"
        canGetLogic={inStage && mini && (sax || (feather && (homing || hardShooting)))}
        canGetBreak={inStage && mini && anyGun}
      />
      <CastleCheck
        id={7032 /* TODO: Possibly more complex logic here. */}
        name="Castle Tiny Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && feather && canSlam && twirl}
        canGetBreak={inStage && (feather || grape) && canSlam && (dk || twirl)}
      />
      <CastleCheck
        id={7033}
        name="Castle Tiny Over Chasm"
        region="Castle Underground"
        canGetLogic={inStage && twirl}
      />
    </>
  )
}

export default TinyBananas
