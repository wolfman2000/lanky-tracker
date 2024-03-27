import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from './CavesCheck'
import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useBoulderTech } from '@renderer/hooks/kongs'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const boulderTech = useBoulderTech()
  const [
    cbCount,
    coloredBananaShuffle,
    kong,
    gun,
    music,
    move,
    crystal,
    pad,
    tiny,
    mini,
    slam,
    bananaport
  ] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.chunky,
      state.pineapple,
      state.triangle,
      state.punch,
      state.hunky,
      state.gone,
      state.tiny,
      state.mini,
      state.slam,
      state.bananaportOpen
    ])
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
  if (gun && (bananaport == 2 || (tiny && mini))) {
    currLogic += 10
  }
  if (gun && igloo && music) {
    currLogic += 10
  }
  if (music && slam != 0 && pad) {
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
