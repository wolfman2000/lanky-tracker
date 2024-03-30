import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavesCheck from '../CavesCheck'
import { useCavesIgloo, useCavesMiniFunky, usePlayCaves } from '@renderer/hooks/caves'
import { logicBreak } from '@renderer/hooks/world'
import { useCbCount } from '@renderer/hooks/settings'
import { useDiddy, useGuitar, usePeanut, useRocket, useSpring } from '@renderer/hooks/kongs'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const miniFunky = useCavesMiniFunky()
  const cbCount = useCbCount()
  const kong = useDiddy()
  const gun = usePeanut()
  const music = useGuitar()
  const crystal = useRocket()
  const pad = useSpring()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 5 // Funky
  if (crystal) {
    currLogic += 20 // bunches by igloo
  }
  if (gun) {
    currLogic += 20 // balloon by warp 4 and balloon by cabin
    if (igloo && music) {
      currLogic += 10 // balloon in igloo
    }
  }

  let currBreak = currLogic + 10
  if (crystal) {
    currLogic += 10 // two bunches that rocket expects.
  }

  if (miniFunky.in && crystal) {
    currLogic += 10
  }
  if (music) {
    currLogic += 5 // Diddy's enemy cabin floor
    if (crystal) {
      currLogic += 5 // Diddy's enemy cabin top
      if (pad) {
        currLogic += 15 // Candles
      }
    }
  }

  if (logicBreak(miniFunky)) {
    currBreak += 10
  }
  if (music) {
    currBreak += 10 // Diddy's enemy cabin floor
    if (crystal) {
      currBreak += 15 // Candles
    }
  }

  return (
    <CavesCheck
      id={6101}
      name="Caves Diddy Medal"
      region="Caves Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
