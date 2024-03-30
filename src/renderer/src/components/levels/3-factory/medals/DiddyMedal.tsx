import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'
import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory
} from '@renderer/hooks/factory'
import { useCbCount } from '@renderer/hooks/settings'
import { useCharge as useSpring, useDiddy, useGuitar, usePeanut } from '@renderer/hooks/kongs'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const cbCount = useCbCount()
  const kong = useDiddy()
  const gun = usePeanut()
  const music = useGuitar()
  const pad = useSpring()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 22 // 12 on prod floor, 5 by game, 5 on warp 5
  if (production) {
    currLogic += 15
  }
  if (testing) {
    currLogic += 8 // 8 by Funky
    if (music && gun) {
      currLogic += 30 // enemy code room balloons
    }
  }
  let currBreak = currLogic
  if (testing) {
    // 5 bunches on block tower.
    currBreak += 25
    if (pad) {
      currLogic += 25
    }
  }

  return (
    <FactoryCheck
      id={3101}
      name="Factory Diddy Medal"
      region="Factory Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
