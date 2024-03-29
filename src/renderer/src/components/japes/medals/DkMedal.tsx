import { useShallow } from 'zustand/react/shallow'

import { useJapesRambi, usePlayJapes } from '@renderer/hooks/japes'
import useDonkStore from '@renderer/store'
import JapesCheck from '../JapesCheck'

/**
 * The logic of DK's Medal in Japes, wrapped neatly in this component.
 * @returns the check for DK's Medal in Japes.
 */
const DkMedal: React.FC = (): JSX.Element => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const [cbCount, coloredBananaShuffle, dk, coconut, blast, vine] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.dk,
      state.moves.coconut,
      state.moves.blast,
      state.moves.vine
    ])
  )
  let currLogic = 36
  if (vine) {
    // Starting area between the vines.
    currLogic += 5
  }
  if (coconut) {
    // Two balloons after first tunnel.
    currLogic += 20
  }
  if (vine && blast) {
    // Blast course
    currLogic += 10
  }
  // Unsure how to handle Diddy Freed.
  currLogic += 9
  if (coconut) {
    currLogic += 10
  }
  if (haveRambiCage) {
    currLogic += 10
  }
  const currBreak = vine ? currLogic : currLogic + 5

  return (
    <JapesCheck
      id={1100}
      name="Japes DK Medal"
      region="Japes Medal Rewards"
      canGetLogic={inStage && dk && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && dk && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal
