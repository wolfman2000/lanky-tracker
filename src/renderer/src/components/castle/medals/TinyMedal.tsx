import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from '../CastleCheck'

const TinyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const [cbCount, coloredBananaShuffle, kong, gun, crystal, pad, diddy, lanky, grape] =
    useDonkStore(
      useShallow((state) => [
        state.settings.cbCount,
        state.settings.shuffleColoredBananas,
        state.moves.tiny,
        state.moves.feather,
        state.moves.mini,
        state.moves.port,
        state.moves.diddy,
        state.moves.lanky,
        state.moves.grape
      ])
    )

  let currLogic = 50
  if (crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 10
  }
  if (diddy && canSlam) {
    currLogic += 5
    if (pad) {
      currLogic += 15
      if (gun) {
        currLogic += 10
      }
    }
  }
  let currBreak = currLogic
  if (gun) {
    currLogic += 5
  } else if (lanky && grape) {
    currBreak += 5
  }

  return (
    <CastleCheck
      id={7103}
      name="Castle Tiny Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
