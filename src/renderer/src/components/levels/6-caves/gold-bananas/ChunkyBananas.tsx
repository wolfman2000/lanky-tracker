import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import {
  useBoulderTech,
  useGone,
  useHunky,
  usePunch,
  useSlam,
  useTriangle
} from '@renderer/hooks/kongs'
import CavesCheck from '../CavesCheck'

const ChunkyBananas: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const gone = useGone()
  const hunky = useHunky()
  const boulderTech = useBoulderTech()
  const triangle = useTriangle()
  const slam = useSlam()
  return (
    <>
      <CavesCheck
        id={6040}
        name="Caves Chunky Gorilla Gone"
        region="Main Caves Area"
        canGetLogic={inStage && punch && gone}
      />
      <CavesCheck
        id={6041}
        name="Caves Chunky Transparent Igloo"
        region="Igloo Area"
        canGetLogic={inStage && punch && boulderTech && hunky}
        canGetBreak={inStage && punch && boulderTech}
      />
      <CavesCheck
        id={6042}
        name="Caves Chunky 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && triangle}
      />
      <CavesCheck
        id={6043}
        name="Caves Chunky 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && triangle && gone && slam}
      />
    </>
  )
}

export default ChunkyBananas
