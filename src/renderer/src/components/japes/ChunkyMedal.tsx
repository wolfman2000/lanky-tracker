import {
  useJapesHive,
  useJapesRambi,
  useJapesUnderground,
  usePlayJapes
} from '@renderer/hooks/japes'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesCheck from './JapesCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayJapes()
  const hiveGate = useJapesHive()
  const haveRambiCage = useJapesRambi()
  const underground = useJapesUnderground()
  const [cbCount, coloredBananaShuffle, chunky, barrel, hunky, pineapple] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.chunky,
      state.barrel,
      state.hunky,
      state.pineapple
    ])
  )

  let currLogic = 15
  if (underground) {
    currLogic += 15
  }

  if (hiveGate && hunky) {
    currLogic += 20
  }

  // Unsure how to handle Diddy Freed.
  currLogic += 15 // one bunch on Cranky's lab, 10 regular bananas on path to hive.
  if (haveRambiCage) {
    if (pineapple) {
      currLogic += 30
    }
    if (barrel) {
      currLogic += 5
    }
  }

  return (
    <JapesCheck
      id={1104}
      name="Japes Chunky Medal"
      region="Japes Medal Rewards"
      canGetLogic={inStage && chunky && (coloredBananaShuffle || currLogic >= cbCount)}
    />
  )
}

export default ChunkyMedal
