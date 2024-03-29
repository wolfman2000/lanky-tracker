import { useCavesIgloo, useCavesPillar, usePlayCaves, useSlamCaves } from '@renderer/hooks/caves'
import CavesCheck from '../CavesCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useHighGrab } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'

const LankyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const canSlam = useSlamCaves()
  const igloo = useCavesIgloo()
  const pillar = useCavesPillar()
  const highGrab = useHighGrab()
  const [cbCount, coloredBananaShuffle, kong, gun, music, pad] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.lanky,
      state.moves.grape,
      state.moves.trombone,
      state.moves.balloon
    ])
  )

  let currLogic = 15
  if (pad) {
    currLogic += 15
  }
  if (gun) {
    currLogic += 10
    if (canSlam) {
      currLogic += 10
    }
  }
  if (igloo) {
    currLogic += 1
    if (gun) {
      currLogic += 10
    }
  }
  let currBreak = currLogic
  if (canSlam) {
    currBreak += 5
    if (pad) {
      currLogic += 5
    }
  }
  if (pillar.in) {
    currLogic += 20
  }
  if (logicBreak(pillar)) {
    currBreak += 20
  }

  if (igloo && music) {
    if (pad) {
      currLogic += 4
    }
    if (highGrab) {
      currBreak += 4
    }
  }

  // lanky cabin
  if (pad) {
    currLogic += 5
    if (music) {
      currLogic += 5
    }
  }
  currBreak += 5
  if (music) {
    currBreak += 5
  }

  return (
    <CavesCheck
      id={6102}
      name="Caves Lanky Medal"
      region="Caves Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
