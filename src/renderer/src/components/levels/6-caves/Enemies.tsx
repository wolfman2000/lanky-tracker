import { useCavesIgloo, useCavesLankyCabin, usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useBongos, useMini, useSax } from '@renderer/hooks/kongs'
import CavesCheck from './CavesCheck'

const EnemyLocations: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const lankyCabin = useCavesLankyCabin()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  const bongos = useBongos()
  const sax = useSax()
  const mini = useMini()

  return (
    <>
      <CavesCheck
        id={6300}
        name="Caves Enemy: Start"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6301}
        name="Caves Enemy: Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6302}
        name="Caves Enemy: Outside 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && zinger}
      />
      <CavesCheck
        id={6303}
        name="Caves Enemy: Waterfall Lanky Cabin"
        region="Cabins Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6304}
        name="Caves Enemy: Near Funky"
        region="Main Caves Area"
        canGetLogic={inStage && zinger}
      />
      <CavesCheck
        id={6305}
        name="Caves Enemy: Near Snide"
        region="Main Caves Area"
        canGetLogic={inStage && kosha}
      />
      <CavesCheck
        id={6306}
        name="Caves Enemy: Near Bonus Room"
        region="Main Caves Area"
        canGetLogic={inStage && mini && kosha}
      />
      <CavesCheck
        id={6307}
        name="Caves Enemy: Lanky Cabin Headphones"
        region="Cabins Area"
        canGetLogic={inStage && anyKong && kosha}
      />
      {/* Giant Kosha used to be here.*/}
      <CavesCheck
        id={6309}
        name="Caves Enemy: DK Igloo Right"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha}
      />
      <CavesCheck
        id={6310}
        name="Caves Enemy: DK Igloo Left"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha}
      />
      {/* Lanky's Igloo enemies used to be here. */}
      <CavesCheck
        id={6316}
        name="Caves Enemy: Tiny Igloo Big"
        region="Igloo Area"
        canGetLogic={igloo && sax && kosha}
      />
      <CavesCheck
        id={6317}
        name="Caves Enemy: Lanky Cabin Inside Near"
        region="Igloo Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />
      <CavesCheck
        id={6318}
        name="Caves Enemy: Lanky Cabin Inside Far"
        region="Igloo Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />
      {/* DK's cabin gauntlet enemies used to be here. */}
      {/* Diddy's cabin gauntlet enemies used to be here. */}
      {/* Diddy's cabin candle enemies used to be here. */}
      {/* Tiny's cabin gauntlet enemies used to be here. */}
    </>
  )
}

export default EnemyLocations
