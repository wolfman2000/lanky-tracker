import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useBoulderTech, useSlam } from '@renderer/hooks/kongs'
import { useBananaportAll } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const boulderTech = useBoulderTech()
  const slam = useSlam()
  const warpAll = useBananaportAll()
  const [cbCount, coloredBananaShuffle, kong, gun, music, move, crystal, pad, tiny, mini] =
    useDonkStore(
      useShallow((state) => [
        state.settings.cbCount,
        state.settings.shuffleColoredBananas,
        state.moves.chunky,
        state.moves.pineapple,
        state.moves.triangle,
        state.moves.punch,
        state.moves.hunky,
        state.moves.gone,
        state.moves.tiny,
        state.moves.mini
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
  if (gun && (warpAll || (tiny && mini))) {
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
