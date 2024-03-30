import { useFactoryProductionTop, useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useChunky, usePineapple, usePunch, useTriangle } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const prodTop = useFactoryProductionTop()
  const cbCount = useCbCount()
  const kong = useChunky()
  const gun = usePineapple()
  const music = useTriangle()
  const move = usePunch()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 20
  if (gun) {
    currLogic += 10
  }
  if (move) {
    currLogic += 15
  }
  if (testing) {
    currLogic += 5
    if (gun) {
      currLogic += 10
    }
    if (music && move) {
      currLogic += 10
      if (gun) {
        currLogic += 10
      }
    }
  }
  if (prodTop) {
    currLogic += 20
  }

  return (
    <FactoryCheck
      id={3103}
      name="Factory Tiny Medal"
      region="Factory Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
    />
  )
}

export default ChunkyMedal
