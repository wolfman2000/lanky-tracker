import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'
import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useBoulderTech, usePunch } from '@renderer/hooks/kongs'

const TinyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const boulderTech = useBoulderTech()
  const [cbCount, coloredBananaShuffle, kong, gun, music, move, crystal, pad, hunky, bananaport] =
    useDonkStore(
      useShallow((state) => [
        state.settings.cbCount,
        state.settings.shuffleColoredBananas,
        state.moves.tiny,
        state.moves.feather,
        state.moves.sax,
        state.moves.twirl,
        state.moves.mini,
        state.moves.port,
        state.moves.hunky,
        state.settings.bananaportOpen
      ])
    )

  let currLogic = 15
  if (bananaport == 2 || crystal) {
    currLogic += 5
  }
  if (gun) {
    currLogic += 10
  }
  if (music) {
    currLogic += 10
    if (gun) {
      currLogic += 10
    }
  }
  if (punch && boulderTech && hunky && pad) {
    currLogic += 20
  }
  if (igloo && music) {
    currLogic += 5
    if (gun) {
      currLogic += 10
    }
  }
  let currBreak = currLogic
  if ((bananaport == 2 || crystal) && move) {
    if (gun) {
      currLogic += 10
    }
    if (pad) {
      currLogic += 5
    }
  }
  if (bananaport == 2 || crystal) {
    if (gun) {
      currBreak += 10
    }
    if (pad) {
      currBreak += 5
    }
  }

  return (
    <CavesCheck
      id={6103}
      name="Caves Tiny Medal"
      region="Caves Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
