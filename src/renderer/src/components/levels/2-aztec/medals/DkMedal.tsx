import {
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecFrontKasplat,
  useAztecLlamaTemple
} from '@renderer/hooks/aztec'
import { useCoconut, useDk, useStrong } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AztecCheck from '../AztecCheck'

const DkMedal: React.FC = () => {
  const inStage = useAztecFront()
  const kasplat = useAztecFrontKasplat()
  const aztecBack = useAztecBack()
  const llamaTemple = useAztecLlamaTemple()
  const backTunnel = useAztecBackTunnel()
  const cbCount = useCbCount()
  const dk = useDk()
  const coconut = useCoconut()
  const strong = useStrong()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 0 // Every banana has opposition.
  if (inStage.in) {
    currLogic += 18
    if (kasplat.in) {
      currLogic += 10
    }
    if (aztecBack.in) {
      currLogic += 7
      if (coconut) {
        currLogic += 30
      }
      if (llamaTemple.in) {
        currLogic += 15
        if (backTunnel.in && strong) {
          currLogic += 20
        }
      }
    }
  }

  let currBreak = 0
  if (logicBreak(inStage)) {
    currBreak += 18
    if (logicBreak(kasplat)) {
      currBreak += 10
    }
    if (logicBreak(aztecBack)) {
      currBreak += 7
      if (coconut) {
        currBreak += 30
      }
      if (logicBreak(llamaTemple)) {
        currBreak += 15
        if (logicBreak(backTunnel)) {
          currBreak += 20
        }
      }
    }
  }

  return (
    <AztecCheck
      id={2100}
      name="Aztec DK Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inStage.in && dk && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={logicBreak(inStage) && dk && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal
