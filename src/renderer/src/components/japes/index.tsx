import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useBlast,
  useBoulderTech,
  useCamera,
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
  useShockwave,
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
  useJapesUnderground,
  useJapesPaintingOutside
} from '@renderer/hooks/japes'
import JapesCheck from './JapesCheck'
import JapesShops from './shops'
import DkMedal from './DkMedal'
import DiddyMedal from './DiddyMedal'
import LankyMedal from './LankyMedal'
import TinyMedal from './TinyMedal'
import ChunkyMedal from './ChunkyMedal'
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
  const shockwave = useShockwave()
  const camera = useCamera()
  const japesPaintingOutside = useJapesPaintingOutside()
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
      <JapesCheck
        id={1013}
        name="Japes Diddy Minecarts"
        region="Japes Caves And Mines"
        canGetLogic={japesMine && charge}
        canGetBreak={japesMine && (lanky || chunky)}
      />
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
      <JapesCheck
        id={1050}
        name="Japes Kasplat Hive Tunnel Lower"
        region="Hive Tunnel Area"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1051}
        name="Japes Kasplat Near Painting Room"
        region="Stormy Tunnel Area"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1052}
        name="Japes Kasplat By Lanky Slope Bonus"
        region="Stormy Tunnel Area"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1053}
        name="Japes Kasplat Hive Tunnel Upper"
        region="Hive Tunnel Area"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1054}
        name="Japes Kasplat Underground"
        region="Japes Caves And Mines"
        canGetLogic={japesUnder && pineapple && vine}
        canGetBreak={japesUnder && (dk || (tiny && twirl) || ((tiny || diddy) && vine))}
      />
      <JapesCheck
        id={1060}
        name="Japes Crate Mountain"
        region="Japes Hillside"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1061}
        name="Japes Crate Rambi"
        region="Stormy Tunnel Area"
        canGetLogic={japesRambi && anyKong}
      />
      <JapesCheck
        id={1070}
        name="Japes Dirt Painting Hill"
        region="Japes Hillside"
        canGetLogic={japesPaintingOutside.in && shockwave}
        canGetBreak={japesPaintingOutside.out && shockwave}
      />
      <JapesCheck
        id={1080}
        name="Japes Fairy Rambi"
        region="Stormy Tunnel Area"
        canGetLogic={japesRambi && camera}
      />
      <JapesCheck
        id={1081}
        name="Japes Fairy Painting Room"
        region="Japes Caves And Mines"
        canGetLogic={japesSlam && japesPaintingInside.in && (anyGun || anyMusic) && camera}
        canGetBreak={japesSlam && japesPaintingInside.out && (anyGun || anyMusic) && camera}
      />
      <JapesCheck
        id={1090}
        name="Japes Arena"
        region="Japes Hillside"
        canGetLogic={playJapes && anyKong}
      />
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
      <JapesCheck
        id={1105}
        name="Japes Boss"
        region="Troff 'N' Scoff"
        canGetLogic={playJapes && anyKong && (vine || peanut || coconut)}
        canGetBreak={playJapes && anyKong}
      />
      <JapesShops />
    </div>
  )
}

export default JapesChecks
