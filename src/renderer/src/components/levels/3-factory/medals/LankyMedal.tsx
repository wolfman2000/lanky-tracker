import useDonkStore from '@renderer/store'
import {
  useFactoryProductionEnabled,
  useFactoryProductionTop,
  useFactoryTesting,
  usePlayFactory
} from '@renderer/hooks/factory'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'
import { useCbCount } from '@renderer/hooks/settings'
import { useGrape, useLanky, useStand, useTrombone } from '@renderer/hooks/kongs'

const LankyMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const prodTop = useFactoryProductionTop()
  const cbCount = useCbCount()
  const kong = useLanky()
  const gun = useGrape()
  const music = useTrombone()
  const move = useStand()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 10
  if (testing) {
    currLogic += 15
    if (gun && music) {
      currLogic += 10
    }
  }
  if (prodTop) {
    currLogic += 15
  }
  if (production) {
    currLogic += 20
  }

  let currBreak = currLogic + 5
  if (move) {
    currLogic += 5
  }
  if (production) {
    currBreak += 25
    if (move) {
      currLogic += 25
    }
  }

  return (
    <FactoryCheck
      id={3102}
      name="Factory Lanky Medal"
      region="Factory Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
