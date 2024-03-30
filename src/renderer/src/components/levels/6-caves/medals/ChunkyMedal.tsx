import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import {
  useBoulderTech,
  useChunky,
  useGone,
  useHunky,
  useMini,
  usePineapple,
  usePunch,
  useSlam,
  useTriangle
} from '@renderer/hooks/kongs'
import { useBananaportAll, useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const boulderTech = useBoulderTech()
  const slam = useSlam()
  const warpAll = useBananaportAll()
  const cbCount = useCbCount()
  const kong = useChunky()
  const gun = usePineapple()
  const music = useTriangle()
  const move = usePunch()
  const crystal = useHunky()
  const pad = useGone()
  const mini = useMini()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 18
  if (boulderTech) {
    currLogic += 5
  }
  if (move) {
    currLogic += 11
    if (gun) {
      currLogic += 10
    }
    if (boulderTech) {
      currLogic += 6
      if (crystal) {
        currLogic += 10
      }
    }
  }
  if (gun && (warpAll || mini)) {
    currLogic += 10
  }
  if (gun && igloo && music) {
    currLogic += 10
  }
  if (music && slam && pad) {
    currLogic += 20
  }

  return (
    <CavesCheck
      id={6104}
      name="Caves Chunky Medal"
      region="Caves Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
    />
  )
}

export default ChunkyMedal
