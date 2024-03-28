import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory
} from '@renderer/hooks/factory'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from './FactoryCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const [cbCount, coloredBananaShuffle, dk, coconut, strong, blast] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.dk,
      state.coconut,
      state.strong,
      state.blast
    ])
  )

  let currLogic = 15
  if (blast) {
    currLogic += 20
  }
  if (coconut) {
    currLogic += 10
  }
  if (testing) {
    currLogic += 5
    if (coconut) {
      currLogic += 35
    }
  }
  let currBreak = currLogic
  if (production) {
    currBreak += 15
    if (strong) {
      currLogic += 15
    }
  }

  return (
    <FactoryCheck
      id={3100}
      name="Factory DK Medal"
      region="Factory Medal Rewards"
      canGetLogic={inStage && dk && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && dk && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal
