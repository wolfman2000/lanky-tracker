import {
  useDiddyGauntletGb,
  useCavesDkCabinBee,
  useCavesIgloo,
  useCavesLankyCabin,
  usePlayCaves
} from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatPurpleKlaptrap, useDefeatZinger } from '@renderer/hooks/enemies'
import {
  useAnyKong,
  useBongos,
  useBoulderTech,
  useGuitar,
  useHunky,
  useMini,
  useMonkeyport,
  usePunch,
  useSax,
  useTrombone
} from '@renderer/hooks/kongs'
import CavesCheck from './CavesCheck'

const EnemyLocations: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const lankyCabin = useCavesLankyCabin()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  const klaptrap = useDefeatPurpleKlaptrap()
  const bongos = useBongos()
  const guitar = useGuitar()
  const trombone = useTrombone()
  const sax = useSax()
  const mini = useMini()
  const boulderTech = useBoulderTech()
  const punch = usePunch()
  const hunky = useHunky()
  const port = useMonkeyport()
  const dkBee = useCavesDkCabinBee()
  const diddyGauntlet = useDiddyGauntletGb()

  return (
    <>
      <CavesCheck
        id={6300}
        name="Caves Enemy Start"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6301}
        name="Caves Enemy Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6302}
        name="Caves Enemy Outside 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && zinger}
      />
      <CavesCheck
        id={6303}
        name="Caves Enemy Waterfall Lanky Cabin"
        region="Cabins Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6304}
        name="Caves Enemy Near Funky"
        region="Main Caves Area"
        canGetLogic={inStage && zinger}
      />
      <CavesCheck
        id={6305}
        name="Caves Enemy Near Snide"
        region="Main Caves Area"
        canGetLogic={inStage && kosha}
      />
      <CavesCheck
        id={6306}
        name="Caves Enemy Near Bonus Room"
        region="Main Caves Area"
        canGetLogic={inStage && mini && kosha}
      />
      <CavesCheck
        id={6307}
        name="Caves Enemy Lanky Cabin Headphones"
        region="Cabins Area"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CavesCheck
        id={6308}
        name="Caves Enemy Giant Kosha"
        region="Igloo Area"
        canGetLogic={inStage && boulderTech && punch && hunky && port && kosha}
        canGetBreak={inStage && boulderTech && punch && port && kosha}
      />
      <CavesCheck
        id={6309}
        name="Caves Enemy DK Igloo Right"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha}
      />
      <CavesCheck
        id={6310}
        name="Caves Enemy DK Igloo Left"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha}
      />
      <CavesCheck
        id={6311}
        name="Caves Enemy Lanky Igloo 0"
        region="Igloo Area"
        canGetLogic={igloo && trombone}
      />
      <CavesCheck
        id={6312}
        name="Caves Enemy Lanky Igloo 1"
        region="Igloo Area"
        canGetLogic={igloo && trombone}
      />
      <CavesCheck
        id={6313}
        name="Caves Enemy Lanky Igloo 2"
        region="Igloo Area"
        canGetLogic={igloo && trombone}
      />
      <CavesCheck
        id={6314}
        name="Caves Enemy Lanky Igloo 3"
        region="Igloo Area"
        canGetLogic={igloo && trombone}
      />
      <CavesCheck
        id={6315}
        name="Caves Enemy Lanky Igloo 4"
        region="Igloo Area"
        canGetLogic={igloo && trombone}
      />
      <CavesCheck
        id={6316}
        name="Caves Enemy Tiny Igloo Big"
        region="Igloo Area"
        canGetLogic={igloo && sax && kosha}
      />
      <CavesCheck
        id={6317}
        name="Caves Enemy Lanky Cabin Inside Near"
        region="Igloo Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />
      <CavesCheck
        id={6318}
        name="Caves Enemy Lanky Cabin Inside Far"
        region="Igloo Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />
      <CavesCheck
        id={6319}
        name="Caves Enemy DK Cabin Gauntlet 0"
        region="Cabins Area"
        canGetLogic={dkBee.in}
        canGetBreak={dkBee.out}
      />
      <CavesCheck
        id={6320}
        name="Caves Enemy DK Cabin Gauntlet 1"
        region="Cabins Area"
        canGetLogic={dkBee.in}
        canGetBreak={dkBee.out}
      />
      <CavesCheck
        id={6321}
        name="Caves Enemy DK Cabin Gauntlet 2"
        region="Cabins Area"
        canGetLogic={dkBee.in}
        canGetBreak={dkBee.out}
      />
      <CavesCheck
        id={6322}
        name="Caves Enemy DK Cabin Gauntlet 3"
        region="Cabins Area"
        canGetLogic={dkBee.in}
        canGetBreak={dkBee.out}
      />
      <CavesCheck
        id={6323}
        name="Caves Enemy DK Cabin Gauntlet 4"
        region="Cabins Area"
        canGetLogic={dkBee.in}
        canGetBreak={dkBee.out}
      />
      <CavesCheck
        id={6324}
        name="Caves Enemy DK Cabin Gauntlet 5"
        region="Cabins Area"
        canGetLogic={dkBee.in}
        canGetBreak={dkBee.out}
      />
      <CavesCheck
        id={6325}
        name="Caves Enemy Diddy Cabin Close Right"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6326}
        name="Caves Enemy Diddy Cabin Far Right"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6327}
        name="Caves Enemy Diddy Cabin Close Left"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6328}
        name="Caves Enemy Diddy Cabin Far Left"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6329}
        name="Caves Enemy Diddy Cabin Center 0"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6330}
        name="Caves Enemy Diddy Cabin Center 1"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6331}
        name="Caves Enemy Diddy Cabin Center 2"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6332}
        name="Caves Enemy Diddy Cabin Center 3"
        region="Cabins Area"
        canGetLogic={diddyGauntlet.in}
        canGetBreak={diddyGauntlet.out}
      />
      <CavesCheck
        id={6333}
        name="Caves Enemy Diddy Cabin Candle 0"
        region="Cabins Area"
        canGetLogic={inStage && guitar && kosha}
      />
      <CavesCheck
        id={6334}
        name="Caves Enemy Diddy Cabin Candle 1"
        region="Cabins Area"
        canGetLogic={inStage && guitar && kosha}
      />
      <CavesCheck
        id={6335}
        name="Caves Enemy Tiny Cabin Gauntlet 0"
        region="Cabins Area"
        canGetLogic={inStage && sax && klaptrap}
      />
      <CavesCheck
        id={6336}
        name="Caves Enemy Tiny Cabin Gauntlet 1"
        region="Cabins Area"
        canGetLogic={inStage && sax && klaptrap}
      />
      <CavesCheck
        id={6337}
        name="Caves Enemy Tiny Cabin Gauntlet 2"
        region="Cabins Area"
        canGetLogic={inStage && sax && klaptrap}
      />
      <CavesCheck
        id={6338}
        name="Caves Enemy Tiny Cabin Gauntlet 3"
        region="Cabins Area"
        canGetLogic={inStage && sax && klaptrap}
      />
      <CavesCheck
        id={6339}
        name="Caves Enemy Tiny Cabin Gauntlet 4"
        region="Cabins Area"
        canGetLogic={inStage && sax && klaptrap}
      />
    </>
  )
}

export default EnemyLocations
