import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useBalloon,
  useDiddy,
  useDk,
  useGrape,
  useLanky,
  useSniper,
  useSprint,
  useTiny,
  useTrombone,
  useTwirl
} from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from '../CastleCheck'

const LankyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const cbCount = useCbCount()
  const kong = useLanky()
  const gun = useGrape()
  const music = useTrombone()
  const crystal = useSprint()
  const pad = useBalloon()
  const dk = useDk()
  const diddy = useDiddy()
  const tiny = useTiny()
  const twirl = useTwirl()
  const sniper = useSniper()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 30
  if (canSlam) {
    currLogic += 30
    if (gun) {
      currLogic += 20
    }
  }
  let currBreak = currLogic
  if (gun && crystal) {
    currLogic += 10
  }
  if (gun && (dk || diddy)) {
    currBreak += 10
  }
  if (canSlam && gun && ((music && pad) || sniper)) {
    currLogic += 10
  }
  if (canSlam && gun && tiny && twirl) {
    currBreak += 10
  }

  return (
    <CastleCheck
      id={7102}
      name="Castle Lanky Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
