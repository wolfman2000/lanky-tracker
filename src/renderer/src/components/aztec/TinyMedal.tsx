import {
  useAztecBack,
  useAztecFront,
  useAztecLlamaLava,
  useAztecLlamaTemple,
  useAztecTinyTemple,
  useSlamAztec
} from '@renderer/hooks/aztec'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AztecCheck from './AztecCheck'
import { logicBreak } from '@renderer/hooks/world'

const TinyMedal: React.FC = () => {
  const inStage = useAztecFront()
  const aztecBack = useAztecBack()
  const tinyTemple = useAztecTinyTemple()
  const llamaTemple = useAztecLlamaTemple()
  const lava = useAztecLlamaLava()
  const canSlam = useSlamAztec()
  const [cbCount, coloredBananaShuffle, tiny, feather, mini, twirl, dive] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.tiny,
      state.feather,
      state.mini,
      state.twirl,
      state.dive
    ])
  )

  let currLogic = 0
  if (inStage.in) {
    if (tinyTemple.in && dive) {
      if (feather) {
        currLogic += 20
      }
      if (mini) {
        currLogic += 5
      }
    }
    if (aztecBack.in) {
      currLogic += 50
    }
    if (llamaTemple.in) {
      currLogic += 3
      if (feather) {
        currLogic += 10
      }
      if (lava.in) {
        currLogic += 2
        if (twirl || canSlam) {
          currLogic += 10
        }
      }
    }
  }

  let currBreak = 0
  if (logicBreak(inStage)) {
    if (logicBreak(tinyTemple) && dive) {
      if (feather) {
        currBreak += 20
      }
      if (mini) {
        currBreak += 5
      }
    }
    if (logicBreak(aztecBack)) {
      currBreak += 50
    }
    if (logicBreak(llamaTemple)) {
      currBreak += 3
      if (feather) {
        currBreak += 10
      }
      if (logicBreak(lava)) {
        currLogic += 12
      }
    }
  }

  return (
    <AztecCheck
      id={2103}
      name="Aztec Tiny Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inStage.in && tiny && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={logicBreak(inStage) && tiny && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
