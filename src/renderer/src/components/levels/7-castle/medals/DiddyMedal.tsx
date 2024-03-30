import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useCharge,
  useCoconut,
  useDiddy,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket
} from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from '../CastleCheck'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const punch = usePunch()
  const coconut = useCoconut()
  const pineapple = usePineapple()
  const cbCount = useCbCount()
  const kong = useDiddy()
  const gun = usePeanut()
  const move = useCharge()
  const crystal = useRocket()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 0
  if (crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 20
  }
  if (punch) {
    currLogic += 20
  }
  if (canSlam) {
    if (crystal) {
      currLogic += 15
    }
    if (gun) {
      currLogic += 20
    }
  }
  let currBreak = currLogic + 5
  if (crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 5
    if (gun && move) {
      currLogic += 10
    }
  }
  if (coconut || pineapple) {
    currBreak += 5
    if (gun && move) {
      currBreak += 10
    }
  }

  return (
    <CastleCheck
      id={7101}
      name="Castle Diddy Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
