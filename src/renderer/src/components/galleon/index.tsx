import {
  useGalleonCannon,
  useGalleonHighTide,
  useGalleonLighthouse,
  useGalleonLowTide,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonCheck from './GalleonCheck'
import { useBoulderTech } from '@renderer/hooks/kongs'
import GalleonShops from './shops'

const GalleonChecks: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const lighthouse = useGalleonLighthouse()
  const outskirts = useGalleonOutskirts()
  const treasure = useGalleonTreasureRoom()
  const cannon = useGalleonCannon()
  const boulderTech = useBoulderTech()
  const highTide = useGalleonHighTide()
  const lowTide = useGalleonLowTide()

  const [
    dk,
    bongos,
    blast,
    diddy,
    guitar,
    rocket,
    spring,
    lanky,
    grape,
    trombone,
    balloon,
    tiny,
    feather,
    sax,
    mini,
    chunky,
    pineapple,
    punch,
    triangle,
    slam,
    pearls,
    vine,
    dive,
    shockwave,
    camera
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.bongos,
      state.blast,
      state.diddy,
      state.guitar,
      state.rocket,
      state.spring,
      state.lanky,
      state.grape,
      state.trombone,
      state.balloon,
      state.tiny,
      state.feather,
      state.sax,
      state.mini,
      state.chunky,
      state.pineapple,
      state.punch,
      state.triangle,
      state.slam,
      state.pearls,
      state.vine,
      state.dive,
      state.shockwave,
      state.camera
    ])
  )

  return (
    <div className="grid">
      <GalleonCheck
        id={4001 /* TODO: Fast check */}
        name="Galleon DK Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouse && highTide && canSlam && dk}
        canGetBreak={lighthouse && canSlam && dk}
      />
      <GalleonCheck
        id={4002}
        name="Galleon DK Free the Seal"
        region="Shipyard Outskirts"
        canGetLogic={lighthouse && highTide && dk && blast && outskirts}
        canGetBreak={lighthouse && dk && blast && outskirts}
      />
      <GalleonCheck
        id={4003}
        name="Galleon DK Seal Race"
        region="Shipyard Outskirts"
        canGetLogic={lighthouse && highTide && dk && blast && outskirts}
        canGetBreak={lighthouse && dk && blast && outskirts}
      />
      <GalleonCheck
        id={4004}
        name="Galleon DK 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && dk && bongos && dive}
      />
      <GalleonCheck
        id={4010 /* Remember fast checks here. */}
        name="Galleon Diddy Ship Switch"
        region="Lighthouse Area"
        canGetLogic={lighthouse && highTide && diddy && canSlam && rocket}
        canGetBreak={lighthouse && diddy && slam != 0 && rocket}
      />
      <GalleonCheck
        id={4011 /* TODO: Bananaport logic. */}
        name="Galleon Diddy Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in && diddy && spring}
        canGetBreak={treasure.out && (diddy || tiny) && (lanky || chunky)}
      />
      <GalleonCheck
        id={4012}
        name="Galleon Diddy Mechfish"
        region="Shipyard Outskirts"
        canGetLogic={lighthouse && outskirts && highTide && diddy && rocket && guitar}
        canGetBreak={lighthouse && outskirts && dive && diddy && rocket && guitar}
      />
      <GalleonCheck
        id={4013}
        name="Galleon Diddy 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && diddy && guitar && dive}
      />
      <GalleonCheck
        id={4020}
        name="Galleon Lanky Enguarde Chest"
        region="Lighthouse Area"
        canGetLogic={lighthouse && lanky && dive}
      />
      <GalleonCheck
        id={4021 /* TODO: Bananaport logic */}
        name="Galleon Lanky Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in && lanky && balloon}
        canGetBreak={treasure.out && (diddy || tiny) && (lanky || chunky)}
      />
      <GalleonCheck
        id={4022}
        name="Galleon Lanky 2 Door Ship"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && canSlam && lanky && dive}
      />
      <GalleonCheck
        id={4023}
        name="Galleon Lanky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && lanky && trombone && dive}
      />
      <GalleonCheck
        id={4030}
        name="Galleon Tiny Pearls"
        region="Lighthouse Area"
        canGetLogic={lighthouse && tiny && mini && dive && pearls != 0}
      />
      <GalleonCheck
        id={4031}
        name="Galleon Tiny Submarine"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && tiny && mini && dive}
      />
      <GalleonCheck
        id={4032}
        name="Galleon Tiny 2 Door Ship"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && canSlam && tiny && dive}
      />
      <GalleonCheck
        id={4033}
        name="Galleon Tiny 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && tiny && sax && dive}
      />
      <GalleonCheck
        id={4034}
        name="Galleon Tiny Treasure Chest Clams x5"
        region="Treasure Room"
        canGetLogic={treasure.in && tiny && mini}
        canGetBreak={treasure.out && tiny && mini}
      />
      <GalleonCheck
        id={4040}
        name="Galleon Chunky Chest"
        region="Galleon Caverns"
        canGetLogic={inStage && chunky && punch}
      />
      <GalleonCheck
        id={4041}
        name="Galleon Chunky Cannon Game"
        region="Galleon Caverns"
        canGetLogic={cannon && boulderTech && highTide}
        canGetBreak={cannon && boulderTech}
      />
      <GalleonCheck
        id={4042}
        name="Galleon Chunky Seasick"
        region="Lighthouse Area"
        canGetLogic={lighthouse && chunky && punch && slam != 0}
      />
      <GalleonCheck
        id={4043}
        name="Galleon Chunky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={lighthouse && outskirts && dive && chunky && triangle}
      />
      <GalleonCheck
        id={4050}
        name="Galleon Kasplat Diddy Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in && diddy && spring}
        canGetBreak={treasure.out && (diddy || tiny) && (lanky || chunky)}
      />
      <GalleonCheck
        id={4051}
        name="Galleon Kasplat Lighthouse Alcove"
        region="Lighthouse Area"
        canGetLogic={lighthouse && lowTide}
      />
      <GalleonCheck
        id={4052}
        name="Galleon Kasplat Cannon Game Room"
        region="Galleon Caverns"
        canGetLogic={cannon && highTide}
        canGetBreak={cannon}
      />
      <GalleonCheck
        id={4053 /* TODO: Tide and bananaport logic. */}
        name="Galleon Kasplat Past Vines"
        region="Galleon Caverns"
        canGetLogic={inStage && vine}
      />
      <GalleonCheck
        id={4054}
        name="Galleon Kasplat Musical Cactus"
        region="Shipyard Outskirts"
        canGetLogic={outskirts}
      />
      <GalleonCheck
        id={4060}
        name="Galleon Crate Cactus"
        region="Shipyard Outskirts"
        canGetLogic={outskirts}
      />
      <GalleonCheck
        id={4070}
        name="Galleon Dirt Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouse && highTide && canSlam && dk && shockwave}
        canGetBreak={lighthouse && canSlam && dk && shockwave}
      />
      <GalleonCheck
        id={4080}
        name="Galleon Fairy Chest"
        region="Galleon Caverns"
        canGetLogic={inStage && chunky && punch && camera}
      />
      <GalleonCheck
        id={4081}
        name="Galleon Fairy 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && tiny && sax && dive}
      />
      <GalleonCheck
        id={4090}
        name="Galleon Arena"
        region="Galleon Caverns"
        canGetLogic={inStage && chunky && punch}
      />
      <GalleonCheck
        id={4100}
        name="Galleon DK Medal"
        region="Galleon Medal Rewards"
        canGetLogic={dk && lighthouse && dive && (lanky || canSlam || bongos || blast)}
      />
      <GalleonCheck
        id={4101}
        name="Galleon Diddy Medal"
        region="Galleon Medal Rewards"
        canGetLogic={diddy && outskirts && dive}
      />
      <GalleonCheck
        id={4102}
        name="Galleon Lanky Medal"
        region="Galleon Medal Rewards"
        canGetLogic={
          lanky &&
          (lighthouse || outskirts) &&
          ((chunky && punch && grape) || (dive && trombone && (canSlam || grape)))
        }
      />
      <GalleonCheck
        id={4103 /* TODO: Simplify this monstrosity. */}
        name="Galleon Tiny Medal"
        region="Galleon Medal Rewards"
        canGetLogic={
          tiny &&
          inStage &&
          dive &&
          ((treasure.in && canSlam && vine && feather && outskirts) ||
            (lighthouse && feather && (treasure.in || vine || canSlam || pineapple)) ||
            (pineapple && treasure.in && ((outskirts && canSlam) || vine)) ||
            (outskirts && canSlam && vine) ||
            (outskirts &&
              lighthouse &&
              (vine ||
                canSlam ||
                feather ||
                pineapple ||
                (vine && (treasure.in || canSlam)) ||
                (treasure.in && (canSlam || feather)))))
        }
      />
      <GalleonCheck
        id={4104}
        name="Galleon Chunky Medal"
        region="Galleon Medal Rewards"
        canGetLogic={chunky && dive && (lighthouse || (outskirts && pineapple))}
      />
      <GalleonCheck
        id={4105}
        name="Galleon Boss"
        region="Troff 'N' Scoff"
        canGetLogic={(inStage && vine) || (dive && (lighthouse || outskirts))}
      />
      <GalleonShops />
    </div>
  )
}

export default GalleonChecks
