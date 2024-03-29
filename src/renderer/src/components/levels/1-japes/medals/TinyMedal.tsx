import { useShallow } from 'zustand/react/shallow'

import {
  useJapesHive,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes,
  useSlamJapes
} from '@renderer/hooks/japes'
import useDonkStore from '@renderer/store'
import JapesCheck from '../JapesCheck'
import { useFeather, useMini, useTiny } from '@renderer/hooks/kongs'

const TinyMedal: React.FC = () => {
  const inStage = usePlayJapes()
  const hiveGate = useJapesHive()
  const sideArea = useJapesSideArea()
  const canSlam = useSlamJapes()
  const haveRambiCage = useJapesRambi()
  const tiny = useTiny()
  const feather = useFeather()
  const mini = useMini()
  const [cbCount, coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.cbCount, state.settings.shuffleColoredBananas])
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
