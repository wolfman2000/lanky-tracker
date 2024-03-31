import { useShallow } from 'zustand/react/shallow'

import {
  useJapesHive,
  useJapesKongGates,
  useJapesRambi,
  useJapesUnderground,
  usePlayJapes
} from '@renderer/hooks/japes'
import { useBarrel, useChunky, useHunky, usePineapple } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import JapesCheck from '../JapesCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayJapes()
  const hiveGate = useJapesHive()
  const haveRambiCage = useJapesRambi()
  const underground = useJapesUnderground()
  const cbCount = useCbCount()
  const chunky = useChunky()
  const barrel = useBarrel()
  const hunky = useHunky()
  const pineapple = usePineapple()
  const kongGates = useJapesKongGates()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 15
  if (underground) {
    currLogic += 15
  }

  if (hiveGate && hunky) {
    currLogic += 20
  }

  if (kongGates) {
    currLogic += 15 // one bunch on Cranky's lab, 10 regular bananas on path to hive.
    if (haveRambiCage) {
      if (pineapple) {
        currLogic += 30
      }
      if (barrel) {
        currLogic += 5
      }
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
