import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import AztecCheck from './AztecCheck'
import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecFront,
  useAztecLlamaTemple,
  useAztecTinyTemple
} from '@renderer/hooks/aztec'
import { useShallow } from 'zustand/react/shallow'
import { useAnyMusic } from '@renderer/hooks/kongs'

const LankyMedal: React.FC = () => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const llamaTemple = useAztecLlamaTemple()
  const doorTemple = useAztec5DoorTemple()
  const anyMusic = useAnyMusic()
  const [cbCount, coloredBananaShuffle, lanky, grape, vine, dive] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.lanky,
      state.grape,
      state.vine,
      state.dive
    ])
  )

  let currLogic = 0
  if (inStage.in) {
    currLogic += 5
    if (tinyTemple.in && dive) {
      currLogic += 14
    }
    if (aztecBack.in) {
      currLogic += 35
      if (doorTemple.in && grape) {
        currLogic += 10
      }
      if (llamaTemple.in) {
        currLogic += 11
        if (grape && vine) {
          currLogic += 5
        }
        if (anyMusic && dive && grape) {
          currLogic += 20
        }
      }
    }
  }

  let currBreak = 0
  if (logicBreak(inStage)) {
    currBreak += 5
    if (logicBreak(tinyTemple) && dive) {
      currBreak += 14
    }
    if (logicBreak(aztecBack)) {
      currBreak += 35
      if (logicBreak(doorTemple) && grape) {
        currBreak += 10
      }
      if (logicBreak(llamaTemple)) {
        currBreak += 11
        if (grape && vine) {
          currBreak += 5
        }
        if (anyMusic && dive && grape) {
          currBreak += 20
        }
      }
    }
  }

  return (
    <AztecCheck
      id={2102}
      name="Aztec Lanky Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inStage.in && lanky && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={logicBreak(inStage) && lanky && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
