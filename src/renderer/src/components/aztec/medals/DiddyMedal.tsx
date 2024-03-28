import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecTinyTemple,
  useSlamAztec
} from '@renderer/hooks/aztec'
import useDonkStore from '@renderer/store'
import AztecCheck from '../AztecCheck'
import { useShallow } from 'zustand/react/shallow'
import { logicBreak } from '@renderer/hooks/world'

const DiddyMedal: React.FC = () => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const backTunnel = useAztecBackTunnel()
  const canSlam = useSlamAztec()
  const [cbCount, coloredBananaShuffle, diddy, peanut, rocket, dive] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.diddy,
      state.moves.peanut,
      state.moves.rocket,
      state.moves.dive
    ])
  )

  let currLogic = 0
  if (inStage.in) {
    currLogic += 5
    if (peanut) {
      currLogic += 10
    }
    if (tinyTemple.in) {
      if (canSlam) {
        currLogic += 3
        if (peanut) {
          currLogic += 15
        }
      }
      if (dive) {
        currLogic += 7
      }
    }
    if (aztecBack.in) {
      currLogic += 30
      if (rocket) {
        currLogic += 10
      }
      if (doorTemple.in && peanut) {
        currLogic += 10
      }
      if (backTunnel.in && peanut) {
        currLogic += 10
      }
    }
  }

  let currBreak = 0
  if (logicBreak(inStage)) {
    currBreak += 5
    if (peanut) {
      currBreak += 10
    }
    if (logicBreak(tinyTemple)) {
      if (canSlam) {
        currBreak += 8
        if (peanut) {
          currBreak += 10
        }
      }
      if (dive) {
        currBreak += 7
      }
    }
    if (logicBreak(aztecBack)) {
      currBreak += 30
      if (rocket) {
        currBreak += 10
      }
      if (logicBreak(doorTemple) && peanut) {
        currBreak += 10
      }
      if (logicBreak(backTunnel) && peanut) {
        currBreak += 10
      }
    }
  }

  return (
    <AztecCheck
      id={2101}
      name="Aztec Diddy Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inStage.in && diddy && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={logicBreak(inStage) && diddy && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
