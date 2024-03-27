import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from './CastleCheck'

const LankyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const [
    cbCount,
    coloredBananaShuffle,
    kong,
    gun,
    music,
    crystal,
    pad,
    dk,
    diddy,
    tiny,
    twirl,
    sniper
  ] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.lanky,
      state.grape,
      state.trombone,
      state.sprint,
      state.balloon,
      state.dk,
      state.diddy,
      state.tiny,
      state.twirl,
      state.sniper
    ])
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
