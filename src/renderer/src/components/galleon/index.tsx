import {
  useGalleonCannon,
  useGalleonHighTide,
  useGalleonLighthouseArea,
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
import DkMedal from './DkMedal'
import DiddyMedal from './DiddyMedal'
import LankyMedal from './LankyMedal'
import TinyMedal from './TinyMedal'
import ChunkyMedal from './ChunkyMedal'
import ArenaPool from '../pools/Arenas'
import BananaMedalPool from '../pools/BananaMedals'
import ToughGoldenBanana from '../pools/ToughGoldenBanana'
import DirtLocations from './Dirt'
import MiscPool from '../pools/Misc'
import KasplatLocations from './Kasplats'
import BossPool from '../pools/Bosses'
import FairyLocations from './Fairies'
import CrateLocations from './Crates'

const GalleonChecks: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const treasure = useGalleonTreasureRoom()
  const cannon = useGalleonCannon()
  const boulderTech = useBoulderTech()
  const highTide = useGalleonHighTide()

  const [
    dk,
    bongos,
    blast,
    diddy,
    guitar,
    rocket,
    spring,
    lanky,
    trombone,
    balloon,
    tiny,
    sax,
    mini,
    chunky,
    punch,
    triangle,
    slam,
    pearls,
    vine,
    dive
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
      state.trombone,
      state.balloon,
      state.tiny,
      state.sax,
      state.mini,
      state.chunky,
      state.punch,
      state.triangle,
      state.slam,
      state.pearls,
      state.vine,
      state.dive
    ])
  )

  return (
    <div className="grid">
      <GalleonCheck
        id={4001 /* TODO: Fast check */}
        name="Galleon DK Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && highTide && canSlam && dk}
        canGetBreak={lighthouseArea && canSlam && dk}
      />
      <GalleonCheck
        id={4002}
        name="Galleon DK Free the Seal"
        region="Shipyard Outskirts"
        canGetLogic={lighthouseArea && highTide && dk && blast && outskirts}
        canGetBreak={lighthouseArea && dk && blast && outskirts}
      />
      <ToughGoldenBanana>
        <GalleonCheck
          id={4003}
          name="Galleon DK Seal Race"
          region="Shipyard Outskirts"
          canGetLogic={lighthouseArea && highTide && dk && blast && outskirts}
          canGetBreak={lighthouseArea && dk && blast && outskirts}
        />
      </ToughGoldenBanana>
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
        canGetLogic={lighthouseArea && highTide && diddy && canSlam && rocket}
        canGetBreak={lighthouseArea && diddy && slam != 0 && rocket}
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
        canGetLogic={lighthouseArea && outskirts && highTide && diddy && rocket && guitar}
        canGetBreak={lighthouseArea && outskirts && dive && diddy && rocket && guitar}
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
        canGetLogic={lighthouseArea && lanky && dive}
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
        canGetLogic={lighthouseArea && tiny && mini && dive && pearls != 0}
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
      <MiscPool>
        <GalleonCheck
          id={4034}
          name="Galleon Tiny Treasure Chest Clams x5"
          region="Treasure Room"
          canGetLogic={treasure.in && tiny && mini}
          canGetBreak={treasure.out && tiny && mini}
        />
      </MiscPool>
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
        canGetLogic={lighthouseArea && chunky && punch && slam != 0}
      />
      <GalleonCheck
        id={4043}
        name="Galleon Chunky 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={lighthouseArea && outskirts && dive && chunky && triangle}
      />
      <KasplatLocations />
      <CrateLocations />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <GalleonCheck
          id={4090}
          name="Galleon Arena"
          region="Galleon Caverns"
          canGetLogic={inStage && chunky && punch}
        />
      </ArenaPool>
      <BananaMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </BananaMedalPool>
      <BossPool>
        <GalleonCheck
          id={4105}
          name="Galleon Boss"
          region="Troff 'N' Scoff"
          canGetLogic={(inStage && vine) || (dive && (lighthouseArea || outskirts))}
        />
      </BossPool>
      <GalleonShops />
    </div>
  )
}

export default GalleonChecks
