import {
  useForestBean,
  useForestDay,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import ForestCheck from './ForestCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAllGun, useAnyGun, useAnyKong, useBoulderTech } from '@renderer/hooks/kongs'
import ForestShops from './shops'
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
    homing,
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
      state.homing,
      state.slam,
      state.bean
    ])
  )

  return (
    <div className="grid">
      <ToughGoldenBanana>
        <ForestCheck
          id={5001}
          name="Forest DK Baboon Blast"
          region="Giant Mushroom Exterior"
          canGetLogic={inStage && dk && blast}
        />
      </ToughGoldenBanana>
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
      <ToughGoldenBanana>
        <ForestCheck
          id={5011}
          name="Forest Diddy Owl Race"
          region="Owl Tree"
          canGetLogic={owlTree && night.in && diddy && guitar && rocket}
          canGetBreak={owlTree && (night.in || night.out) && diddy && guitar && rocket}
        />
      </ToughGoldenBanana>
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
      <ToughGoldenBanana>
        <ForestCheck
          id={5022}
          name="Forest Lanky Rabbit Race"
          region="Owl Tree"
          canGetLogic={owlTree && lanky && trombone && sprint}
        />
      </ToughGoldenBanana>
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
        name="Forest Tiny Anthill"
        region="Owl Tree"
        canGetLogic={owlTree && tiny && mini && sax}
      />
      <MiscPool>
        <ForestCheck
          id={5034}
          name="Forest Tiny Bean"
          region="Owl Tree"
          canGetLogic={owlTree && tiny && mini && sax}
        />
      </MiscPool>
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
      <ToughGoldenBanana>
        <ForestCheck
          id={5040}
          name="Forest Chunky Minecarts"
          region="Forest Center And Beanstalk"
          canGetLogic={inStage && chunky && slam != 0}
        />
      </ToughGoldenBanana>
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
      <KasplatLocations />
      <CrateLocations />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <ForestCheck
          id={5090}
          name="Forest Arena"
          region="Giant Mushroom Exterior"
          canGetLogic={inStage && anyKong}
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
        <ForestCheck
          id={5105}
          name="Forest Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong}
        />
      </BossPool>
      <ForestShops />
    </div>
  )
}

export default ForestChecks
