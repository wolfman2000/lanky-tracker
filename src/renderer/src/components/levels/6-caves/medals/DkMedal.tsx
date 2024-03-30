import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useBlast, useBongos, useCoconut, useDk, usePunch, useStrong } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const cbCount = useCbCount()
  const kong = useDk()
  const gun = useCoconut()
  const music = useBongos()
  const crystal = useStrong()
  const pad = useBlast()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
