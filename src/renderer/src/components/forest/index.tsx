import {
  useForestBean,
  useForestDay,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/world'
import ForestCheck from './ForestCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAllGun, useAnyGun, useAnyKong, useBoulderTech } from '@renderer/hooks/kongs'
import ForestShops from './shops'

const ForestChecks: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const beanstalk = useForestBean()
  const owlTree = useForestOwl()
  const day = useForestDay()
  const night = useForestNight()
  const allGuns = useAllGun()
  const anyGun = useAnyGun()
  const anyKong = useAnyKong()
  const boulderTech = useBoulderTech()
  const [
    dk,
    grab,
    strong,
    blast,
    diddy,
    guitar,
    charge,
    rocket,
    spring,
    lanky,
    grape,
    trombone,
    stand,
    sprint,
    tiny,
    feather,
    sax,
    mini,
    chunky,
    pineapple,
    triangle,
    punch,
    hunky,
    vine,
    dive,
    homing,
    shockwave,
    camera,
    slam,
    bean
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.grab,
      state.strong,
      state.blast,
      state.diddy,
      state.guitar,
      state.charge,
      state.rocket,
      state.spring,
      state.lanky,
      state.grape,
      state.trombone,
      state.stand,
      state.sprint,
      state.tiny,
      state.feather,
      state.sax,
      state.mini,
      state.chunky,
      state.pineapple,
      state.triangle,
      state.punch,
      state.hunky,
      state.vine,
      state.dive,
      state.homing,
      state.shockwave,
      state.camera,
      state.slam,
      state.bean
    ])
  )

  return (
    <div className="grid">
      <ForestCheck
        id={5001}
        name="Forest DK Baboon Blast"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && dk && blast}
      />
      <ForestCheck
        id={5002}
        name="Forest DK Mushroom Cannons"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && allGuns && canSlam}
      />
      <ForestCheck
        id={5003}
        name="Forest DK Mill"
        region="Forest Mills"
        canGetLogic={inStage && day.in && night.in && dk && canSlam && grab}
        canGetBreak={inStage && day.out && night.out && dk && canSlam && grab}
      />
      <ForestCheck
        id={5004}
        name="Forest DK Barn"
        region="Forest Mills"
        canGetLogic={inStage && night.in && dk && canSlam && strong && vine}
        canGetBreak={inStage && (night.in || night.out) && dk && canSlam}
      />
      <ForestCheck
        id={5010}
        name="Forest Diddy Top of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && diddy && rocket}
      />
      <ForestCheck
        id={5011}
        name="Forest Diddy Owl Race"
        region="Owl Tree"
        canGetLogic={owlTree && night.in && diddy && guitar && rocket}
        canGetBreak={owlTree && (night.in || night.out) && diddy && guitar && rocket}
      />
      <ForestCheck
        id={5012}
        name="Forest Diddy Caged Banana"
        region="Forest Mills"
        canGetLogic={inStage && diddy && charge && guitar && anyGun}
      />
      <ForestCheck
        id={5013}
        name="Forest Diddy Rafters"
        region="Forest Mills"
        canGetLogic={inStage && night.in && diddy && spring && guitar}
        canGetBreak={inStage && (night.in || night.out) && diddy && (spring || lanky || chunky)}
      />
      <ForestCheck
        id={5020 /* TODO: Hard shooting */}
        name="Forest Lanky Zingers"
        region="Forest Mills"
        canGetLogic={inStage && night.in && lanky && canSlam && anyGun && homing}
        canGetBreak={inStage && (night.in || night.out) && lanky && canSlam && anyGun}
      />
      <ForestCheck
        id={5021}
        name="Forest Lanky Colored Mushrooms"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && lanky && stand && canSlam}
        canGetBreak={inStage && lanky && canSlam && ((diddy && rocket) || tiny)}
      />
      <ForestCheck
        id={5022}
        name="Forest Lanky Rabbit Race"
        region="Owl Tree"
        canGetLogic={owlTree && lanky && trombone && sprint}
      />
      <ForestCheck
        id={5023}
        name="Forest Lanky Mushroom Attic"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && lanky && stand && canSlam}
        canGetBreak={inStage && lanky && canSlam && ((diddy && rocket) || tiny)}
      />
      <ForestCheck
        id={5030}
        name="Forest Tiny Mushroom Barrel"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && tiny && canSlam}
      />
      <ForestCheck
        id={5031}
        name="Forest Tiny Anthill x2"
        region="Owl Tree"
        canGetLogic={owlTree && tiny && mini && sax}
      />
      <ForestCheck
        id={5032 /* TODO: Dusk Setting */}
        name="Forest Tiny Spider Boss"
        region="Forest Mills"
        canGetLogic={inStage && night.in && chunky && punch && tiny && mini && feather}
        canGetBreak={inStage && night.out && chunky && punch && tiny && mini && feather}
      />
      <ForestCheck
        id={5033}
        name="Forest Tiny Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && bean && tiny && mini && sax}
      />
      <ForestCheck
        id={5040}
        name="Forest Chunky Minecarts"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && chunky && slam != 0}
      />
      <ForestCheck
        id={5041}
        name="Forest Chunky Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && chunky && canSlam && pineapple}
      />
      <ForestCheck
        id={5042}
        name="Forest Chunky Kegs"
        region="Forest Mills"
        canGetLogic={inStage && day.in && boulderTech && punch && triangle && dk && grab}
        canGetBreak={inStage && (day.in || day.out) && boulderTech && punch && triangle}
      />
      <ForestCheck
        id={5043}
        name="Forest Chunky Apple"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && boulderTech && hunky}
      />
      <ForestCheck
        id={5050}
        name="Forest Kasplat Behind DK's Barn"
        region="Forest Mills"
        canGetLogic={inStage && night.in && anyGun}
        canGetBreak={inStage && (night.in || night.out)}
      />
      <ForestCheck
        id={5051}
        name="Forest Kasplat Inside Giant Mushroom"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5052}
        name="Forest Kasplat Under Owl Tree"
        region="Owl Tree"
        canGetLogic={owlTree && anyKong}
      />
      <ForestCheck
        id={5053}
        name="Forest Kasplat Low Mushroom Exterior"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5054}
        name="Forest Kasplat Mushroom Night Door"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5060}
        name="Forest Crate Rafters"
        region="Forest Mills"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5061}
        name="Forest Crate Owl Tree"
        region="Owl Tree"
        canGetLogic={owlTree && anyKong}
      />
      <ForestCheck
        id={5062}
        name="Forest Crate Barn Outside"
        region="Forest Mills"
        canGetLogic={inStage && night.in}
        canGetBreak={inStage && night.out}
      />
      <ForestCheck
        id={5063}
        name="Forest Crate Barn Inside"
        region="Forest Mills"
        canGetLogic={inStage && night.in && dk && canSlam && strong}
        canGetBreak={inStage && (night.in || night.out) && dk && canSlam}
      />
      <ForestCheck
        id={5070}
        name="Forest Dirt Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && shockwave}
      />
      <ForestCheck
        id={5071}
        name="Forest Dirt Mills Grass"
        region="Forest Mills"
        canGetLogic={inStage && shockwave}
      />
      <ForestCheck
        id={5080}
        name="Forest Fairy Rafters"
        region="Forest Mills"
        canGetLogic={inStage && camera && night.in && diddy && spring && guitar}
        canGetBreak={
          inStage && camera && (night.in || night.out) && diddy && (spring || lanky || chunky)
        }
      />
      <ForestCheck
        id={5081}
        name="Forest Fairy Barn"
        region="Forest Mills"
        canGetLogic={inStage && camera && night.in && dk && canSlam && strong}
        canGetBreak={inStage && camera && (night.in || night.out) && dk && canSlam}
      />
      <ForestCheck
        id={5090}
        name="Forest Arena"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5100}
        name="Forest DK Medal"
        region="Forest Medal Rewards"
        canGetLogic={inStage && dk}
      />
      <ForestCheck
        id={5101}
        name="Forest Diddy Medal"
        region="Forest Medal Rewards"
        canGetLogic={inStage && diddy}
      />
      <ForestCheck
        id={5102}
        name="Forest Lanky Medal"
        region="Forest Medal Rewards"
        canGetLogic={inStage && lanky && (anyGun || (stand && canSlam))}
      />
      <ForestCheck
        id={5103}
        name="Forest Tiny Medal"
        region="Forest Medal Rewards"
        canGetLogic={
          inStage &&
          tiny &&
          ((feather && ((chunky && pineapple) || dive || mini || (lanky && grape))) ||
            (dive && mini && ((chunky && punch) || (lanky && grape))))
        }
      />
      <ForestCheck
        id={5104}
        name="Forest Chunky Medal"
        region="Forest Medal Rewards"
        canGetLogic={inStage && chunky}
      />
      <ForestCheck
        id={5105}
        name="Forest Boss"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong}
      />
      <ForestShops />
    </div>
  )
}

export default ForestChecks
