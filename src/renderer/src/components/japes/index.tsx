import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useBlast,
  useBoulderTech,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useGrape,
  useHunky,
  useLanky,
  useMini,
  useOrange,
  usePeanut,
  usePineapple,
  useStand,
  useTiny,
  useTwirl,
  useVine
} from '@renderer/hooks/kongs'
import {
  useJapesHive,
  useJapesMine,
  useJapesRambi,
  usePlayJapes,
  useSlamJapes,
  useJapesPainting,
  useJapesUnderground
} from '@renderer/hooks/japes'
import JapesCheck from './JapesCheck'
import JapesShops from './shops'
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
const JapesChecks: React.FC = () => {
  const playJapes = usePlayJapes()
  const anyKong = useAnyKong()
  const dk = useDk()
  const coconut = useCoconut()
  const diddy = useDiddy()
  const tiny = useTiny()
  const peanut = usePeanut()
  const charge = useCharge()
  const lanky = useLanky()
  const chunky = useChunky()
  const blast = useBlast()
  const vine = useVine()
  const orange = useOrange()
  const grape = useGrape()
  const stand = useStand()
  const japesRambi = useJapesRambi()
  const japesSlam = useSlamJapes()
  const japesMine = useJapesMine()
  const japesHive = useJapesHive()
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  const twirl = useTwirl()
  const feather = useFeather()
  const mini = useMini()
  const boulderTech = useBoulderTech()
  const hunky = useHunky()
  const pineapple = usePineapple()
  const japesPaintingInside = useJapesPainting()
  const japesUnder = useJapesUnderground()
  return (
    <div className="grid">
      <JapesCheck
        id={1001}
        name="Japes DK Front of Cage"
        region="Japes Hillside"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1002 /* TODO: Is it worth having this lock the others? */}
        name="Japes DK Free Diddy"
        region="Japes Hillside"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1003}
        name="Japes DK Caged Banana"
        region="Japes Lowlands"
        canGetLogic={japesRambi && japesSlam}
      />
      <JapesCheck
        id={1004}
        name="Japes DK Baboon Blast"
        region="Japes Lowlands"
        canGetLogic={playJapes && dk && blast && vine}
      />
      <JapesCheck
        id={1010}
        name="Japes Diddy Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && diddy && japesSlam}
      />
      <JapesCheck
        id={1011}
        name="Japes Diddy Mountain"
        region="Japes Hillside"
        canGetLogic={japesMine && japesSlam}
      />
      <JapesCheck
        id={1012}
        name="Japes Diddy Tunnel"
        region="Japes Lowlands"
        canGetLogic={playJapes && diddy && peanut}
      />
      <ToughGoldenBanana>
        <JapesCheck
          id={1013}
          name="Japes Diddy Minecarts"
          region="Japes Caves And Mines"
          canGetLogic={japesMine && charge}
          canGetBreak={japesMine && (lanky || chunky)}
        />
      </ToughGoldenBanana>
      <JapesCheck
        id={1020}
        name="Japes Lanky Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && lanky && japesSlam}
      />
      <JapesCheck
        id={1021}
        name="Japes Lanky Grape Gate"
        region="Japes Hillside"
        canGetLogic={japesMine && lanky && grape}
      />
      <JapesCheck
        id={1022}
        name="Japes Lanky Slope"
        region="Stormy Tunnel Area"
        canGetLogic={playJapes && lanky && stand}
        canGetBreak={playJapes && anyKong}
      />
      <JapesCheck
        id={1023 /* TODO: FTA? */}
        name="Japes Lanky Painting Room"
        region="Japes Caves And Mines"
        canGetLogic={japesSlam && japesPaintingInside.in && (anyGun || anyMusic)}
        canGetBreak={japesSlam && japesPaintingInside.out && (anyGun || anyMusic)}
      />
      <JapesCheck
        id={1030}
        name="Japes Tiny Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && tiny && japesSlam}
      />
      <JapesCheck
        id={1031}
        name="Japes Tiny Feather Gate Barrel"
        region="Japes Lowlands"
        canGetLogic={japesMine && tiny && feather}
      />
      <JapesCheck
        id={1032}
        name="Japes Tiny Stump"
        region="Hive Tunnel Area"
        canGetLogic={japesHive && mini}
      />
      <JapesCheck
        id={1033}
        name="Japes Tiny Beehive"
        region="Hive Tunnel Area"
        canGetLogic={japesHive && mini && japesSlam && (anyMusic || orange)}
        canGetBreak={japesHive && mini && japesSlam}
      />
      <JapesCheck
        id={1040}
        name="Japes Chunky Boulder"
        region="Japes Lowlands"
        canGetLogic={playJapes && boulderTech}
      />
      <JapesCheck
        id={1041}
        name="Japes Chunky Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && boulderTech && japesSlam}
      />
      <JapesCheck
        id={1042}
        name="Japes Chunky Giant Bonus Barrel"
        region="Hive Tunnel Area"
        canGetLogic={japesHive && chunky && hunky}
      />
      <JapesCheck
        id={1043}
        name="Japes Chunky Underground"
        region="Japes Caves And Mines"
        canGetLogic={japesUnder && pineapple && vine}
        canGetBreak={japesUnder && (dk || (tiny && twirl) || ((tiny || diddy) && vine))}
      />
      <KasplatLocations />
      <CrateLocations />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <JapesCheck
          id={1090}
          name="Japes Arena"
          region="Japes Hillside"
          canGetLogic={playJapes && anyKong}
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
        <JapesCheck
          id={1105}
          name="Japes Boss"
          region="Troff 'N' Scoff"
          canGetLogic={playJapes && anyKong && (vine || peanut || coconut)}
          canGetBreak={playJapes && anyKong}
        />
      </BossPool>
      <JapesShops />
    </div>
  )
}

export default JapesChecks
