import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useCoconut, usePineapple, usePunch } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from './CastleCheck'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const punch = usePunch()
  const coconut = useCoconut()
  const pineapple = usePineapple()
  const [cbCount, coloredBananaShuffle, kong, gun, move, crystal] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.diddy,
      state.peanut,
      state.charge,
      state.rocket
    ])
  )

  let currLogic = 0
  if (crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 20
  }
  if (punch) {
    currLogic += 20
  }
  if (canSlam) {
    if (crystal) {
      currLogic += 15
    }
    if (gun) {
      currLogic += 20
    }
  }
  let currBreak = currLogic + 5
  if (crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 5
    if (gun && move) {
      currLogic += 10
    }
  }
  if (coconut || pineapple) {
    currBreak += 5
    if (gun && move) {
      currBreak += 10
    }
  }

  return (
    <CastleCheck
      id={7101}
      name="Castle Diddy Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
