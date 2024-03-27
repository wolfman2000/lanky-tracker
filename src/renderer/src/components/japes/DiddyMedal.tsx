import { useJapesRambi, useJapesSideArea, usePlayJapes, useSlamJapes } from '@renderer/hooks/japes'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesCheck from './JapesCheck'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const sideArea = useJapesSideArea()
  const canSlam = useSlamJapes()
  const [cbCount, coloredBananaShuffle, diddy, peanut, dive, charge] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.diddy,
      state.peanut,
      state.dive,
      state.charge
    ])
  )
  let currLogic = 32
  if (dive) {
    currLogic += 10
  }
  if (sideArea) {
    currLogic += 10
  }
  if (peanut) {
    currLogic += 20
  }

  // Unsure how to handle Diddy Freed.
  currLogic += 3
  if (haveRambiCage) {
    currLogic += 5
  }

  // Mines have a specific situation.
  let currBreak = currLogic
  if (canSlam) {
    currLogic += 15
    currBreak += 20
    if (charge) {
      // Minecart (OOL already covers this)
      currLogic += 5
    }
  }

  return (
    <JapesCheck
      id={1101}
      name="Japes Diddy Medal"
      region="Japes Medal Rewards"
      canGetLogic={inStage && diddy && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && diddy && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
