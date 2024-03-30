import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory
} from '@renderer/hooks/factory'
import { useBlast, useCoconut, useDk, useStrong } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const cbCount = useCbCount()
  const dk = useDk()
  const coconut = useCoconut()
  const strong = useStrong()
  const blast = useBlast()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
