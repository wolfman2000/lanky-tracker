import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { usePunch } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const [cbCount, coloredBananaShuffle, kong, gun, music, crystal, pad] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.dk,
      state.moves.coconut,
      state.moves.bongos,
      state.moves.grab,
      state.moves.strong,
      state.moves.blast
    ])
  )

  let currLogic = 25
  if (punch) {
    currLogic += 3
    if (gun) {
      currLogic += 20
    }
  }
  if (pad) {
    currLogic += 20
  }
  if (music) {
    currLogic += 10
  }
  if (music && igloo && gun) {
    currLogic == 10
  }
  const currBreak = currLogic + 7
  if (music && igloo && crystal) {
    currLogic == 7
  }

  return (
    <CavesCheck
      id={6100}
      name="Caves DK Medal"
      region="Caves Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal
