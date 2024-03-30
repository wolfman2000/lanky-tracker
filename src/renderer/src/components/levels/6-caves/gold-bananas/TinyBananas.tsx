import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useMini, useMonkeyport, useOrange, useSax, useSlam } from '@renderer/hooks/kongs'
import { useBananaportAll } from '@renderer/hooks/settings'
import CavesCheck from '../CavesCheck'

const TinyBananas: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const mini = useMini()
  const port = useMonkeyport()
  const sax = useSax()
  const slam = useSlam()
  const orange = useOrange()
  const warpAll = useBananaportAll()
  return (
    <>
      <CavesCheck
        id={6030}
        name="Caves Tiny Cave Barrel"
        region="Main Caves Area"
        canGetLogic={inStage && (mini || warpAll)}
      />
      <CavesCheck
        id={6031}
        name="Caves Tiny Monkeyport Igloo"
        region="Igloo Area"
        canGetLogic={inStage && mini && port}
      />
      <CavesCheck
        id={6032}
        name="Caves Tiny 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && sax && slam}
      />
      <CavesCheck
        id={6033}
        name="Caves Tiny 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && sax && orange}
      />
    </>
  )
}

export default TinyBananas
