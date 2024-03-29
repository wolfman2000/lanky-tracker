import { useShallow } from 'zustand/react/shallow'

import {
  useJapesPainting,
  useJapesPaintingOutside,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes
} from '@renderer/hooks/japes'
import { useAnyKong, useDive } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import JapesCheck from '../JapesCheck'

const LankyMedal: React.FC = (): JSX.Element => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const sideArea = useJapesSideArea()
  const japesPaintingOutside = useJapesPaintingOutside()
  const japesPaintingInside = useJapesPainting()
  const anyKong = useAnyKong()
  const dive = useDive()

  const [cbCount, coloredBananaShuffle, lanky, grape, stand] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.lanky,
      state.moves.grape,
      state.moves.stand
    ])
  )

  let currLogic = 10
  if (dive) {
    currLogic += 5
  }
  if (sideArea && grape) {
    currLogic += 5
  }
  let currBreak = currLogic
  // Slope fun time.
  if (japesPaintingOutside.in) {
    currLogic += 3
    if (japesPaintingInside.in) {
      currLogic += 20
      if (grape) {
        currLogic += 10
      }
    }
  }
  if (logicBreak(japesPaintingOutside)) {
    currBreak += 3
    if (logicBreak(japesPaintingInside)) {
      currBreak += 20
      if (grape) {
        currBreak += 10
      }
    }
  }

  // Unsure how to handle Diddy Freed.
  currLogic += 6
  currBreak += 6
  if (grape) {
    currLogic += 20
    currBreak += 20
  }
  if (haveRambiCage) {
    currLogic += 10
    currBreak += 10
  }
  if (stand) {
    currLogic += 11
  }
  if (anyKong) {
    currBreak += 11
  }

  return (
    <JapesCheck
      id={1102}
      name="Japes Lanky Medal"
      region="Japes Medal Rewards"
      canGetLogic={inStage && lanky && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && lanky && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
