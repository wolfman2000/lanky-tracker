import { useCastleTree, usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useBoulderTech, useChunky, usePineapple, usePunch } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from '../CastleCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const tree = useCastleTree()
  const boulderTech = useBoulderTech()
  const cbCount = useCbCount()
  const kong = useChunky()
  const gun = usePineapple()
  const move = usePunch()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 30
  if (tree) {
    currLogic += 5
    if (move && gun) {
      currLogic += 10
    }
  }
  if (gun && move) {
    currLogic += 40
  }
  if (canSlam) {
    if (gun) {
      currLogic += 10
    }
    if (move && boulderTech) {
      currLogic += 5
    }
  }

  return (
    <CastleCheck
      id={7104}
      name="Castle Chunky Medal"
      region="Castle Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
    />
  )
}

export default ChunkyMedal
