import {
  useFactoryProductionEnabled,
  useFactoryProductionTop,
  useFactoryTesting,
  usePlayFactory
} from '@renderer/hooks/factory'
import { useDk, useFeather, useMini, useTiny, useTwirl } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'

const TinyMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const prodTop = useFactoryProductionTop()
  const cbCount = useCbCount()
  const kong = useTiny()
  const gun = useFeather()
  const move = useTwirl()
  const crystal = useMini()
  const dk = useDk()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 15
  if (testing) {
    currLogic += 25
    if (crystal) {
      currLogic += 5
    }
    if (gun) {
      currLogic += 20
    }
  }
  if (prodTop) {
    currLogic += 10
  }
  if (production) {
    currLogic += 20
  }
  const currBreak = production && dk ? (currLogic += 5) : currLogic
  if (production && move) {
    currLogic += 5
  }

  return (
    <FactoryCheck
      id={3103}
      name="Factory Tiny Medal"
      region="Factory Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
