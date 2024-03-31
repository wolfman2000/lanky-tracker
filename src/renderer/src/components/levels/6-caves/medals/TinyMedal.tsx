import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import {
  useBoulderTech,
  useFeather,
  useHunky,
  useMini,
  useMonkeyport,
  usePunch,
  useSax,
  useTiny,
  useTwirl
} from '@renderer/hooks/kongs'
import { useBananaportAll, useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'

const TinyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const boulderTech = useBoulderTech()
  const warpAll = useBananaportAll()
  const cbCount = useCbCount()
  const kong = useTiny()
  const gun = useFeather()
  const music = useSax()
  const move = useTwirl()
  const crystal = useMini()
  const pad = useMonkeyport()
  const hunky = useHunky()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 15
  if (warpAll || crystal) {
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
  if ((warpAll || crystal) && move) {
    if (gun) {
      currLogic += 10
    }
    if (pad) {
      currLogic += 5
    }
  }
  if (warpAll || crystal) {
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
