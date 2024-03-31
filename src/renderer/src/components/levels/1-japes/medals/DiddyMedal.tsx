import { useShallow } from 'zustand/react/shallow'

import { useJapesRambi, useJapesSideArea, usePlayJapes, useSlamJapes } from '@renderer/hooks/japes'
import { useCharge, useDiddy, useDive, usePeanut } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import JapesCheck from '../JapesCheck'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const sideArea = useJapesSideArea()
  const canSlam = useSlamJapes()
  const cbCount = useCbCount()
  const diddy = useDiddy()
  const peanut = usePeanut()
  const dive = useDive()
  const charge = useCharge()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
