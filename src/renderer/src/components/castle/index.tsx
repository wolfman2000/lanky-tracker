import { useCastleTree, usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import CastleCheck from './CastleCheck'
import { useAnyGun, useAnyKong, useAnyMusic } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleShops from './shops'
import DkMedal from './DkMedal'
import DiddyMedal from './DiddyMedal'
import LankyMedal from './LankyMedal'
import TinyMedal from './TinyMedal'
import ChunkyMedal from './ChunkyMedal'
import ArenaPool from '../pools/Arenas'
import BananaMedalPool from '../pools/BananaMedals'
import ToughGoldenBanana from '../pools/ToughGoldenBanana'
import DirtLocations from './Dirt'
import KasplatLocations from './Kasplats'
import BossPool from '../pools/Bosses'
import FairyLocations from './Fairies'
import CrateLocations from './Crates'

const CastleChecks: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const tree = useCastleTree()
  const anyGun = useAnyGun()
  const anyKong = useAnyKong()
  const anyMusic = useAnyMusic()
  const [
    dk,
    coconut,
    grab,
    strong,
    diddy,
    peanut,
    charge,
    rocket,
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
    gone,
    barrel,
    homing,
    sniper,
    vine
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.coconut,
      state.grab,
      state.strong,
      state.diddy,
      state.peanut,
      state.charge,
      state.rocket,
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
      state.gone,
      state.barrel,
      state.homing,
      state.sniper,
      state.vine
    ])
  )

  return (
    <div className="grid">
      <ToughGoldenBanana>
        <CastleCheck
          id={7001}
          name="Castle DK Tree"
          region="Castle Surroundings"
          canGetLogic={tree && coconut && sniper}
        />
      </ToughGoldenBanana>
      <CastleCheck
        id={7002}
        name="Castle DK Library"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && strong}
        canGetBreak={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7003}
        name="Castle DK Minecarts"
        region="Castle Underground"
        canGetLogic={inStage && dk && coconut && grab}
      />
      <CastleCheck
        id={7004}
        name="Castle DK Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7010}
        name="Castle Diddy Above Castle"
        region="Castle Surroundings"
        canGetLogic={inStage && diddy && rocket}
      />
      <CastleCheck
        id={7011}
        name="Castle Diddy Ballroom"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && rocket}
      />
      <CastleCheck
        id={7012}
        name="Castle Diddy Crypt"
        region="Castle Underground"
        canGetLogic={inStage && diddy && peanut && charge}
      />
      <CastleCheck
        id={7013}
        name="Castle Diddy Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && diddy && canSlam && peanut && sniper && vine}
      />
      <CastleCheck
        id={7020}
        name="Castle Lanky Tower"
        region="Castle Rooms"
        canGetLogic={inStage && lanky && canSlam && grape && balloon && sniper}
        canGetBreak={inStage && lanky && canSlam && grape && balloon && homing}
      />
      <CastleCheck
        id={7021}
        name="Castle Lanky Greenhouse"
        region="Castle Surroundings"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7022}
        name="Castle Lanky Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && lanky && grape && sprint && vine}
        canGetBreak={inStage && lanky && grape && (sprint || dk || diddy)}
      />
      <CastleCheck
        id={7023}
        name="Castle Lanky Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && lanky && canSlam && trombone && balloon}
        canGetBreak={inStage && lanky && canSlam && trombone && tiny && twirl}
      />
      <CastleCheck
        id={7030}
        name="Castle Tiny Car Race"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && tiny && port && mini}
      />
      <CastleCheck
        id={7031 /* TODO: Hard shooting settings */}
        name="Castle Tiny Trash Can"
        region="Castle Surroundings"
        canGetLogic={inStage && tiny && mini && (sax || (homing && anyGun))}
        canGetBreak={inStage && tiny && mini && anyGun}
      />
      <CastleCheck
        id={7032 /* TODO: Possibly more complex logic here. */}
        name="Castle Tiny Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && tiny && feather && canSlam && twirl}
        canGetBreak={
          inStage && ((tiny && feather) || (lanky && grape)) && canSlam && (dk || (tiny && twirl))
        }
      />
      <CastleCheck
        id={7033}
        name="Castle Tiny Over Chasm"
        region="Castle Underground"
        canGetLogic={inStage && tiny && twirl}
      />
      <CastleCheck
        id={7040 /* TODO: Hard shoot settings */}
        name="Castle Chunky Tree"
        region="Castle Surroundings"
        canGetLogic={tree && chunky && punch && pineapple && sniper}
        canGetBreak={tree && chunky && punch && pineapple}
      />
      <CastleCheck
        id={7041}
        name="Castle Chunky Shed"
        region="Castle Surroundings"
        canGetLogic={inStage && chunky && punch && (triangle || (gone && pineapple))}
        canGetBreak={inStage && chunky && punch && anyMusic}
      />
      <CastleCheck
        id={7042}
        name="Castle Chunky Museum"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && punch && barrel}
      />
      <CastleCheck
        id={7043}
        name="Castle Chunky Crypt"
        region="Castle Underground"
        canGetLogic={inStage && chunky && pineapple && punch}
      />
      <KasplatLocations />
      <CrateLocations />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <CastleCheck
          id={7090}
          name="Castle Arena"
          region="Castle Surroundings"
          canGetLogic={inStage && lanky && canSlam}
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
        <CastleCheck
          id={7105}
          name="Castle Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong}
        />
      </BossPool>
      <CastleShops />
    </div>
  )
}

export default CastleChecks
