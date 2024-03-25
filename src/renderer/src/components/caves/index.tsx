import { useCavesIgloo, usePlayCaves, useSlamCaves } from '@renderer/hooks/caves'
import CavesCheck from './CavesCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyGun, useAnyKong } from '@renderer/hooks/kongs'
import CavesShops from './shops'

const CavesChecks: React.FC = () => {
  const inStage = usePlayCaves()
  const canSlam = useSlamCaves()
  const igloo = useCavesIgloo()
  const anyGun = useAnyGun()
  const anyKong = useAnyKong()
  const [
    dk,
    coconut,
    bongos,
    strong,
    blast,
    diddy,
    peanut,
    guitar,
    rocket,
    spring,
    lanky,
    grape,
    trombone,
    sprint,
    balloon,
    tiny,
    feather,
    sax,
    twirl,
    mini,
    port,
    chunky,
    pineapple,
    triangle,
    punch,
    hunky,
    gone,
    slam,
    barrel,
    orange,
    homing,
    shockwave,
    camera
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.coconut,
      state.bongos,
      state.strong,
      state.blast,
      state.diddy,
      state.peanut,
      state.guitar,
      state.rocket,
      state.spring,
      state.lanky,
      state.grape,
      state.trombone,
      state.sprint,
      state.balloon,
      state.tiny,
      state.feather,
      state.sax,
      state.twirl,
      state.mini,
      state.port,
      state.chunky,
      state.pineapple,
      state.triangle,
      state.punch,
      state.hunky,
      state.gone,
      state.slam,
      state.barrel,
      state.orange,
      state.homing,
      state.shockwave,
      state.camera
    ])
  )

  return (
    <div className="grid">
      <CavesCheck
        id={6001}
        name="Caves DK Baboon Blast"
        region="Main Caves Area"
        canGetLogic={inStage && dk && blast}
      />
      <CavesCheck
        id={6002}
        name="Caves DK 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && dk && bongos && strong}
        canGetBreak={igloo && dk && bongos}
      />
      <CavesCheck
        id={6003}
        name="Caves DK Rotating Cabin"
        region="Cabins Area"
        canGetLogic={inStage && dk && bongos && slam != 0}
      />
      <CavesCheck
        id={6004 /* TODO: Hard shooting */}
        name="Caves DK 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && dk && bongos && anyGun && homing}
        canGetBreak={inStage && dk && bongos && anyGun}
      />
      <CavesCheck
        id={6010}
        name="Caves Diddy Waterfall"
        region="Main Caves Area"
        canGetLogic={inStage && diddy && rocket}
        canGetBreak={inStage && (dk || (tiny && twirl))}
      />
      <CavesCheck
        id={6011}
        name="Caves Diddy 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && diddy && guitar && barrel}
      />
      <CavesCheck
        id={6012}
        name="Caves Diddy 5 Door Cabin Lower"
        region="Cabins Area"
        canGetLogic={inStage && diddy && guitar && rocket && orange}
        canGetBreak={inStage && diddy && guitar}
      />
      <CavesCheck
        id={6013}
        name="Caves Diddy 5 Door Cabin Upper"
        region="Cabins Area"
        canGetLogic={inStage && diddy && guitar && rocket && spring}
        canGetBreak={inStage && diddy && guitar && rocket}
      />
      <CavesCheck
        id={6020}
        name="Caves Lanky Beetle Race"
        region="Main Caves Area"
        canGetLogic={canSlam && lanky && balloon && sprint}
        canGetBreak={canSlam && lanky && (diddy || tiny) && sprint}
      />
      <CavesCheck
        id={6021}
        name="Caves Lanky Castle"
        region="Main Caves Area"
        canGetLogic={canSlam && lanky}
      />
      <CavesCheck
        id={6022}
        name="Caves Lanky 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && lanky && trombone && balloon}
        canGetBreak={igloo && lanky && trombone && (diddy || tiny)}
      />
      <CavesCheck
        id={6023}
        name="Caves Lanky 1 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && lanky && balloon && trombone && sprint}
        canGetBreak={inStage && lanky && trombone && (sprint || dk)}
      />
      <CavesCheck
        id={6030 /* TODO: Bananaport Logic */}
        name="Caves Tiny Cave Barrel"
        region="Main Caves Area"
        canGetLogic={inStage && tiny && mini}
      />
      <CavesCheck
        id={6031}
        name="Caves Tiny Monkeyport Igloo"
        region="Igloo Area"
        canGetLogic={inStage && tiny && mini && port}
      />
      <CavesCheck
        id={6032}
        name="Caves Tiny 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && tiny && sax && slam != 0}
      />
      <CavesCheck
        id={6033}
        name="Caves Tiny 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && tiny && sax && orange}
      />
      <CavesCheck
        id={6040}
        name="Caves Chunky Gorilla Gone"
        region="Main Caves Area"
        canGetLogic={inStage && chunky && punch && gone}
      />
      <CavesCheck
        id={6041}
        name="Caves Chunky Transparent Igloo"
        region="Igloo Area"
        canGetLogic={inStage && chunky && punch && barrel && hunky}
        canGetBreak={inStage && chunky && punch && barrel}
      />
      <CavesCheck
        id={6042}
        name="Caves Chunky 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && chunky && triangle}
      />
      <CavesCheck
        id={6043}
        name="Caves Chunky 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && chunky && triangle && gone}
      />
      <CavesCheck
        id={6050}
        name="Caves Kasplat Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6051 /* TODO: Bananaport Logic */}
        name="Caves Kasplat Mini Room by Funky"
        region="Main Caves Area"
        canGetLogic={inStage && tiny && mini && twirl}
        canGetBreak={inStage && tiny && mini}
      />
      <CavesCheck
        id={6052 /* TODO: Bananaport logic. */}
        name="Caves Kasplat On the Pillar"
        region="Main Caves Area"
        canGetLogic={inStage && diddy && rocket}
        canGetBreak={inStage && lanky && balloon}
      />
      <CavesCheck
        id={6053}
        name="Caves Kasplat Cabins"
        region="Cabins Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6054}
        name="Caves Kasplat Igloo"
        region="Igloo Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6070}
        name="Caves Dirt Giant Kosha"
        region="Igloo Area"
        canGetLogic={inStage && shockwave && tiny && port && chunky && punch && barrel && hunky}
        canGetBreak={inStage && shockwave && tiny && port && chunky && punch && barrel}
      />
      <CavesCheck
        id={6080}
        name="Caves Fairy Igloo"
        region="Igloo Area"
        canGetLogic={inStage && tiny && sax && slam != 0 && camera}
      />
      <CavesCheck
        id={6081}
        name="Caves Fairy Cabin"
        region="Cabins Area"
        canGetLogic={inStage && camera && diddy && guitar && rocket && spring}
        canGetBreak={inStage && camera && diddy && guitar && rocket}
      />
      <CavesCheck
        id={6090}
        name="Caves Arena"
        region="Cabins Area"
        canGetLogic={inStage && dk && bongos && slam != 0}
      />
      <CavesCheck
        id={6100}
        name="Caves DK Medal"
        region="Caves Medal Rewards"
        canGetLogic={inStage && dk && (blast || bongos || (chunky && punch && coconut))}
      />
      <CavesCheck
        id={6101}
        name="Caves Diddy Medal"
        region="Caves Medal Rewards"
        canGetLogic={
          inStage &&
          diddy &&
          ((peanut && guitar) || (rocket && (peanut || guitar || (tiny && mini && twirl))))
        }
        canGetBreak={
          inStage &&
          diddy &&
          ((peanut && guitar) || (rocket && (peanut || guitar || (tiny && mini))))
        }
      />
      <CavesCheck
        id={6102}
        name="Caves Lanky Medal"
        region="Caves Medal Rewards"
        canGetLogic={
          inStage &&
          lanky &&
          ((balloon && ((diddy && rocket) || trombone || grape || canSlam)) ||
            (grape && ((diddy && rocket) || (trombone && canSlam))))
        }
      />
      <CavesCheck
        id={6103}
        name="Caves Tiny Medal"
        region="Caves Medal Rewards"
        canGetLogic={
          inStage &&
          tiny &&
          ((feather && (sax || mini || (barrel && chunky && punch && hunky && port))) ||
            (port && ((twirl && mini && sax) || (chunky && punch && hunky && (sax || mini)))))
        }
      />
      <CavesCheck
        id={6104}
        name="Caves Chunky Medal"
        region="Caves Medal Rewards"
        canGetLogic={
          inStage &&
          chunky &&
          ((punch &&
            (barrel || (triangle && gone) || (pineapple && (triangle || (tiny && mini))))) ||
            (triangle &&
              ((pineapple && tiny && mini && barrel) || (gone && (pineapple || barrel)))))
        }
      />
      <CavesCheck
        id={6105}
        name="Caves Boss"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong}
      />
      <CavesShops />
    </div>
  )
}

export default CavesChecks
