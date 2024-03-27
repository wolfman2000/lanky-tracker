import { useCastleTree, usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { usePeanut, usePineapple } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from './CastleCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const tree = useCastleTree()
  const peanut = usePeanut()
  const pineapple = usePineapple()
  const [cbCount, coloredBananaShuffle, kong, gun, crystal] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.dk,
      state.coconut,
      state.strong
    ])
  )

  let currLogic = 50
  if (tree && gun) {
    currLogic += 15
  }
  let currBreak = currLogic
  if (canSlam) {
    currLogic += 10
    currBreak += 20
    if (crystal) {
      currLogic += 10
    }
  }
  if (gun) {
    currLogic += 15
  } else if (peanut || pineapple) {
    currBreak += 5
  }

  return (
    <CastleCheck
      id={7100}
      name="Castle DK Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal