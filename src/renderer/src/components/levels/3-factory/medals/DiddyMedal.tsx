import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'
import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory
} from '@renderer/hooks/factory'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const [cbCount, coloredBananaShuffle, kong, gun, music, move] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.diddy,
      state.moves.peanut,
      state.moves.guitar,
      state.moves.charge
    ])
  )

  let currLogic = 22
  if (production) {
    currLogic += 15
  }
  if (testing) {
    currLogic += 8
    if (music && gun) {
      currLogic += 30
    }
  }
  let currBreak = currLogic
  if (testing) {
    currBreak += 25
    if (move) {
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
