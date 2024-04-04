import {
  useDefeatBat,
  useDefeatKlump,
  useDefeatKosha,
  useDefeatZinger
} from '@renderer/hooks/enemies'
import {
  useForestBean,
  useForestBeanHalf,
  useForestDay,
  useForestMushroomRoof,
  useForestNight,
  useForestOwl,
  useForestSpiderBoss,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import {
  useAnyKong,
  useChunky,
  useDiddy,
  useDk,
  useLanky,
  useMini,
  usePunch,
  useSax,
  useStrong
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from './ForestCheck'

const EnemyLocations: React.FC = () => {
  const inStage = usePlayForest()
  const owlTree = useForestOwl()
  const beanstalk = useForestBean()
  const beanHalf = useForestBeanHalf()
  const roof = useForestMushroomRoof()
  const canSlam = useSlamForest()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const bat = useDefeatBat()
  const kosha = useDefeatKosha()
  const anyKong = useAnyKong()
  const mini = useMini()
  const sax = useSax()
  const diddy = useDiddy()
  const dk = useDk()
  const strong = useStrong()
  const night = useForestNight()
  const day = useForestDay()
  const punch = usePunch()
  const lanky = useLanky()
  const chunky = useChunky()
  const spiderBoss = useForestSpiderBoss()

  return (
    <>
      <ForestCheck
        id={5300}
        name="Forest Enemy Hollow Tree 0"
        region="Owl Tree"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5301}
        name="Forest Enemy Hollow Tree 1"
        region="Owl Tree"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5302}
        name="Forest Enemy Hollow Tree Entrance"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5303}
        name="Forest Enemy Tree Melon Crate 0"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5304}
        name="Forest Enemy Tree Melon Crate 1"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5305}
        name="Forest Enemy Tree Melon Crate 2"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5310}
        name="Forest Enemy Near Beanstalk 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5311}
        name="Forest Enemy Near Beanstalk 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5312}
        name="Forest Enemy Green Tunnel"
        region="Forest Center And Beanstalk"
        canGetLogic={beanHalf && zinger}
      />
      <ForestCheck
        id={5313}
        name="Forest Enemy Near Low Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5314}
        name="Forest Enemy Near Pink Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5315}
        name="Forest Enemy Near Mushroom Rocket Barrel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5316}
        name="Forest Enemy b/t Rocket & Yellow Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5317}
        name="Forest Enemy Near Cranky"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5318}
        name="Forest Enemy Rear Tag"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5319}
        name="Forest Enemy Near Face Puzzle"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5320}
        name="Forest Enemy Near Crown"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5321}
        name="Forest Enemy Near High Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5322}
        name="Forest Enemy Top Of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={roof && anyKong && klump}
      />
      <ForestCheck
        id={5323}
        name="Forest Enemy Near Apple Dropoff"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5324}
        name="Forest Enemy Near DK Portal"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5325}
        name="Forest Enemy Near Well Tag"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5326}
        name="Forest Enemy Yellow Tunnel 0"
        region="Owl Tree"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5327}
        name="Forest Enemy Yellow Tunnel 1"
        region="Owl Tree"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5328}
        name="Forest Enemy Yellow Tunnel 2"
        region="Owl Tree"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5329}
        name="Forest Enemy Yellow Tunnel 3"
        region="Owl Tree"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5330}
        name="Forest Enemy Near Snide"
        region="Forest Mills"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5331}
        name="Forest Enemy Near Iso Coin"
        region="Forest Mills"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5332}
        name="Forest Enemy Near Snide"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5333}
        name="Forest Enemy Near Dark Attic"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5334}
        name="Forest Enemy Near Well Exit"
        region="Forest Mills"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5335}
        name="Forest Enemy Near Blue Tunnel"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5336}
        name="Forest Enemy Thornvine 0"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5337}
        name="Forest Enemy Thornvine 1"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5338}
        name="Forest Enemy Thornvine 2"
        region="Forest Mills"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5339}
        name="Forest Enemy Thornvine Entrance"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5340}
        name="Forest Enemy Anthill Gauntlet 0"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5341}
        name="Forest Enemy Anthill Gauntlet 1"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5342}
        name="Forest Enemy Anthill Gauntlet 2"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5343}
        name="Forest Enemy Anthill Gauntlet 3"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5344}
        name="Forest Enemy Winch Inside"
        region="Forest Mills"
        canGetLogic={inStage && diddy && canSlam && bat}
      />
      <ForestCheck
        id={5345}
        name="Forest Enemy Thornvine Barn Inside"
        region="Forest Mills"
        canGetLogic={night.in && strong && canSlam && kosha}
        canGetBreak={logicBreak(night) && dk && canSlam && kosha}
      />
      <ForestCheck
        id={5346}
        name="Forest Enemy Mill Inside Front"
        region="Forest Mills"
        canGetLogic={day.in && zinger}
        canGetBreak={logicBreak(day) && zinger}
      />
      <ForestCheck
        id={5347}
        name="Forest Enemy Mill Inside Rear"
        region="Forest Mills"
        canGetLogic={day.in && punch && zinger}
        canGetBreak={logicBreak(day) && punch && zinger}
      />
      <ForestCheck
        id={5348}
        name="Forest Enemy Mushroom Night Door"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5349}
        name="Forest Enemy Mushroom Path 0"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5350}
        name="Forest Enemy Mushroom Path 1"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5351}
        name="Forest Enemy Attic Gauntlet 0"
        region="Forest Mills"
        canGetLogic={night.in && lanky && canSlam && bat}
        canGetBreak={logicBreak(night) && lanky && canSlam && bat}
      />
      <ForestCheck
        id={5352}
        name="Forest Enemy Attic Gauntlet 1"
        region="Forest Mills"
        canGetLogic={night.in && lanky && canSlam && bat}
        canGetBreak={logicBreak(night) && lanky && canSlam && bat}
      />
      <ForestCheck
        id={5353}
        name="Forest Enemy Attic Gauntlet 2"
        region="Forest Mills"
        canGetLogic={night.in && lanky && canSlam && bat}
        canGetBreak={logicBreak(night) && lanky && canSlam && bat}
      />
      <ForestCheck
        id={5354}
        name="Forest Enemy Mushroom Leap 0"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger}
      />
      <ForestCheck
        id={5355}
        name="Forest Enemy Mushroom Leap 1"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger}
      />
      <ForestCheck
        id={5356}
        name="Forest Enemy Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && chunky && canSlam && zinger}
      />
      <ForestCheck
        id={5357}
        name="Forest Enemy Spider Gauntlet 0"
        region="Forest Mills"
        canGetLogic={spiderBoss.in}
        canGetBreak={spiderBoss.out}
      />
      <ForestCheck
        id={5358}
        name="Forest Enemy Spider Gauntlet 1"
        region="Forest Mills"
        canGetLogic={spiderBoss.in}
        canGetBreak={spiderBoss.out}
      />
      <ForestCheck
        id={5359}
        name="Forest Enemy Spider Gauntlet 2"
        region="Forest Mills"
        canGetLogic={spiderBoss.in}
        canGetBreak={spiderBoss.out}
      />
    </>
  )
}

export default EnemyLocations
