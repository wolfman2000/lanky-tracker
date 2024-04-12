import {
  useChunkyShedGb,
  useCastleTree,
  usePlayCastle,
  useSlamCastle
} from '@renderer/hooks/castle'
import { useDefeatBat, useDefeatKosha } from '@renderer/hooks/enemies'
import {
  useAnyKong,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useGrape,
  useLanky,
  usePeanut,
  usePineapple,
  useSlam
} from '@renderer/hooks/kongs'
import CastleCheck from './CastleCheck'

const EnemyLocations: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const shed = useChunkyShedGb()
  const tree = useCastleTree()
  const anyKong = useAnyKong()
  const diddy = useDiddy()
  const dk = useDk()
  const lanky = useLanky()
  const chunky = useChunky()
  const kosha = useDefeatKosha()
  const bat = useDefeatBat()
  const peanut = usePeanut()
  const charge = useCharge()
  const pineapple = usePineapple()
  const coconut = useCoconut()
  const slam = useSlam()
  const grape = useGrape()
  const feather = useFeather()

  return (
    <>
      <CastleCheck
        id={7300}
        name="Castle Enemy Near Bridge 0"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7301}
        name="Castle Enemy Near Bridge 1"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7302}
        name="Castle Enemy Wooden Extrusion 0"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7303}
        name="Castle Enemy Wooden Extrusion 1"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7304}
        name="Castle Enemy Near Shed"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7305}
        name="Castle Enemy Near Library"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7306}
        name="Castle Enemy Near Tower"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7307}
        name="Castle Enemy Museum Steps"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7308}
        name="Castle Enemy Near Low Caves"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7309}
        name="Castle Enemy Path to Low Kasplat"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7310}
        name="Castle Enemy Low Boss Portal"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7311}
        name="Castle Enemy Path to Dungeon"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7312}
        name="Castle Enemy Near Headphones"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7313}
        name="Castle Enemy Ballroom Start"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && kosha}
      />
      <CastleCheck
        id={7314}
        name="Castle Enemy Ballroom Board 0"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam}
      />
      <CastleCheck
        id={7315}
        name="Castle Enemy Ballroom Board 1"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam}
      />
      <CastleCheck
        id={7316}
        name="Castle Enemy Ballroom Board 2"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam}
      />
      <CastleCheck
        id={7317}
        name="Castle Enemy Ballroom Board 3"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam}
      />
      <CastleCheck
        id={7318}
        name="Castle Enemy Ballroom Board 4"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam}
      />
      <CastleCheck
        id={7319}
        name="Castle Enemy Dungeon Face Room"
        region="Castle Underground"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7320}
        name="Castle Enemy Dungeon Chair Room"
        region="Castle Underground"
        canGetLogic={inStage && diddy && canSlam && kosha}
      />
      <CastleCheck
        id={7321}
        name="Castle Enemy Dungeon Outside Lanky Room"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7322}
        name="Castle Enemy Shed Gauntlet 0"
        region="Castle Surroundings"
        canGetLogic={shed.in}
        canGetBreak={shed.out}
      />
      <CastleCheck
        id={7323}
        name="Castle Enemy Shed Gauntlet 1"
        region="Castle Surroundings"
        canGetLogic={shed.in}
        canGetBreak={shed.out}
      />
      <CastleCheck
        id={7324}
        name="Castle Enemy Shed Gauntlet 2"
        region="Castle Surroundings"
        canGetLogic={shed.in}
        canGetBreak={shed.out}
      />
      <CastleCheck
        id={7325}
        name="Castle Enemy Shed Gauntlet 3"
        region="Castle Surroundings"
        canGetLogic={shed.in}
        canGetBreak={shed.out}
      />
      <CastleCheck
        id={7326}
        name="Castle Enemy Shed Gauntlet 4"
        region="Castle Surroundings"
        canGetLogic={shed.in}
        canGetBreak={shed.out}
      />
      <CastleCheck
        id={7327}
        name="Castle Enemy Low Cave Near Crypt"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7328}
        name="Castle Enemy Low Cave Near Stair Right"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7320}
        name="Castle Enemy Low Cave Near Stair Left"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7330}
        name="Castle Enemy Low Cave Near Near Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7331}
        name="Castle Enemy Low Cave Near Near Funky"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7332}
        name="Castle Enemy Low Cave Near Near Tag"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7333}
        name="Castle Enemy Crypt Diddy Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7334}
        name="Castle Enemy Crypt Diddy Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7335}
        name="Castle Enemy Crypt Diddy Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7336}
        name="Castle Enemy Crypt Diddy Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7337}
        name="Castle Enemy Crypt Chunky Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7338}
        name="Castle Enemy Crypt Chunky Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7339}
        name="Castle Enemy Crypt Chunky Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7340}
        name="Castle Enemy Crypt Chunky Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7341}
        name="Castle Enemy Crypt Minecart Entry"
        region="Castle Underground"
        canGetLogic={inStage && coconut}
      />
      <CastleCheck
        id={7342}
        name="Castle Enemy Crypt Fork"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple)}
      />
      <CastleCheck
        id={7343}
        name="Castle Enemy Crypt Near Diddy"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple)}
      />
      <CastleCheck
        id={7344}
        name="Castle Enemy Crypt Near Chunky"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple)}
      />
      <CastleCheck
        id={7345}
        name="Castle Enemy Mausoleum Tiny"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape)}
      />
      <CastleCheck
        id={7346}
        name="Castle Enemy Mausoleum Lanky Switch"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape)}
      />
      <CastleCheck
        id={7347}
        name="Castle Enemy Mausoleum Lanky Gate"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape)}
      />
      <CastleCheck
        id={7348}
        name="Castle Enemy Upper Cave Near Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7349}
        name="Castle Enemy Upper Cave Pit"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7350}
        name="Castle Enemy Upper Cave Near Pit"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7351}
        name="Castle Enemy Upper Cave Near Entrance"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7352}
        name="Castle Enemy Upper Cave Near Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7353}
        name="Castle Enemy Library Gauntlet 0"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7354}
        name="Castle Enemy Library Gauntlet 1"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7355}
        name="Castle Enemy Library Gauntlet 2"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7356}
        name="Castle Enemy Library Gauntlet 3"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7357}
        name="Castle Enemy Library Gauntlet Fork Left 0"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat}
      />
      <CastleCheck
        id={7358}
        name="Castle Enemy Library Gauntlet Fork Left 1"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat}
      />
      <CastleCheck
        id={7359}
        name="Castle Enemy Library Gauntlet Fork Center"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat}
      />
      <CastleCheck
        id={7360}
        name="Castle Enemy Library Gauntlet Fork Right"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat}
      />
      <CastleCheck
        id={7361}
        name="Castle Enemy Museum Start"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && kosha}
      />
      <CastleCheck
        id={7362}
        name="Castle Enemy Museum Main 0"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7363}
        name="Castle Enemy Museum Main 1"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7364}
        name="Castle Enemy Museum Main 2"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7365}
        name="Castle Enemy Museum Main 3"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7366}
        name="Castle Enemy Tower Gauntlet 0"
        region="Castle Rooms"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7367}
        name="Castle Enemy Tower Gauntlet 1"
        region="Castle Rooms"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7368}
        name="Castle Enemy Tower Gauntlet 2"
        region="Castle Rooms"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7369}
        name="Castle Enemy Tower Gauntlet 3"
        region="Castle Rooms"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7370}
        name="Castle Enemy Tower Gauntlet 4"
        region="Castle Rooms"
        canGetLogic={inStage && lanky && canSlam}
      />
      <CastleCheck
        id={7370}
        name="Castle Enemy Tree Start 0"
        region="Castle Surroundings"
        canGetLogic={tree && bat}
      />
      <CastleCheck
        id={7371}
        name="Castle Enemy Tree Start 1"
        region="Castle Surroundings"
        canGetLogic={tree && bat}
      />
    </>
  )
}
export default EnemyLocations
