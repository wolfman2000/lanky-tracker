import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecFront,
  useAztecTinyTemple
} from '@renderer/hooks/aztec'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AztecCheck from './AztecCheck'
import { logicBreak } from '@renderer/hooks/world'

const ChunkyMedal: React.FC = () => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const [cbCount, coloredBananaShuffle, chunky, pineapple, dive] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.chunky,
      state.pineapple,
      state.dive
    ])
  )

  let currLogic = 0
  if (inStage.in) {
    currLogic += 5
    if (pineapple) {
      currLogic += 20
    }
    if (tinyTemple.in) {
      currLogic += 29
      if (pineapple && dive) {
        currLogic += 10
      }
    }
    if (aztecBack.in) {
      currLogic += 16
      if (doorTemple.in && pineapple) {
        currLogic += 20
      }
    }
  }

  let currBreak = 0
  if (logicBreak(inStage)) {
    currLogic += 5
    if (pineapple) {
      currBreak += 20
    }
    if (logicBreak(tinyTemple)) {
      currBreak += 29
      if (pineapple && dive) {
        currBreak += 10
      }
    }
    if (logicBreak(aztecBack)) {
      currBreak += 16
      if (logicBreak(doorTemple) && pineapple) {
        currBreak += 20
      }
    }
  }

  return (
    <AztecCheck
      id={2104}
      name="Aztec Chunky Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inStage.in && chunky && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={logicBreak(inStage) && chunky && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default ChunkyMedal
