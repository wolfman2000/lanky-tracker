import {
  useJapesHive,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes,
  useSlamJapes
} from '@renderer/hooks/japes'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesCheck from './JapesCheck'

const TinyMedal: React.FC = () => {
  const inStage = usePlayJapes()
  const hiveGate = useJapesHive()
  const sideArea = useJapesSideArea()
  const canSlam = useSlamJapes()
  const haveRambiCage = useJapesRambi()
  const [cbCount, coloredBananaShuffle, tiny, feather, mini] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.tiny,
      state.feather,
      state.mini
    ])
  )

  let currLogic = 5
  if (sideArea && feather) {
    currLogic += 5
  }
  if (hiveGate) {
    currLogic += 5
    if (mini) {
      currLogic += 30
      if (canSlam) {
        currLogic += 8
      }
      if (feather) {
        currLogic += 10
      }
    }
  }

  // Unsure how to handle Diddy Freed.
  currLogic += 7
  if (feather) {
    currLogic += 10
  }
  if (haveRambiCage) {
    currLogic += 10
    if (feather) {
      currLogic += 10
    }
  }

  return (
    <JapesCheck
      id={1103}
      name="Japes Tiny Medal"
      region="Japes Medal Rewards"
      canGetLogic={inStage && tiny && (coloredBananaShuffle || currLogic >= cbCount)}
    />
  )
}

export default TinyMedal
