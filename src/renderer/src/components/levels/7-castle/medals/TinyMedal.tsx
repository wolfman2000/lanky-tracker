import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useDiddy,
  useFeather,
  useGrape,
  useLanky,
  useMini,
  useMonkeyport,
  useTiny
} from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from '../CastleCheck'

const TinyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const cbCount = useCbCount()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const pad = useMonkeyport()
  const diddy = useDiddy()
  const lanky = useLanky()
  const grape = useGrape()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 50
  if (crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 10
  }
  if (diddy && canSlam) {
    currLogic += 5
    if (pad) {
      currLogic += 15
      if (gun) {
        currLogic += 10
      }
    }
  }
  let currBreak = currLogic
  if (gun) {
    currLogic += 5
  } else if (lanky && grape) {
    currBreak += 5
  }

  return (
    <CastleCheck
      id={7103}
      name="Castle Tiny Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
