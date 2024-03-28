import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory,
  useSlamFactory
} from '@renderer/hooks/factory'
import FactoryCheck from './FactoryCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryShops from './shops'
import DkMedal from './DkMedal'
import DiddyMedal from './DiddyMedal'
import LankyMedal from './LankyMedal'
import TinyMedal from './TinyMedal'
import ChunkyMedal from './ChunkyMedal'
import ArenaPool from '../pools/Arenas'
import BananaMedalPool from '../pools/BananaMedals'
import DirtLocations from './Dirt'
import KasplatLocations from './Kasplats'
import BossPool from '../pools/Bosses'
import CompanyPool from '../pools/Company'
import FairyLocations from './Fairies'

const FactoryChecks: React.FC = () => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  const [
    dk,
    coconut,
    grab,
    strong,
    blast,
    diddy,
    guitar,
    charge,
    spring,
    lanky,
    trombone,
    stand,
    balloon,
    tiny,
    feather,
    twirl,
    mini,
    chunky,
    triangle,
    punch,
    hunky,
    vine
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.coconut,
      state.grab,
      state.strong,
      state.blast,
      state.diddy,
      state.guitar,
      state.charge,
      state.spring,
      state.lanky,
      state.trombone,
      state.stand,
      state.balloon,
      state.tiny,
      state.feather,
      state.twirl,
      state.mini,
      state.chunky,
      state.triangle,
      state.punch,
      state.hunky,
      state.vine
    ])
  )

  return (
    <div className="grid">
      <FactoryCheck
        id={3001}
        name="Factory DK Number Game"
        region="Testing Area"
        canGetLogic={testing && dk && canSlam}
      />
      <FactoryCheck
        id={3002 /* TODO: Fast Check Situation */}
        name="Factory DK Power Hut"
        region="Storage And Arcade"
        canGetLogic={testing && dk && coconut}
      />
      <FactoryCheck
        id={3003 /* TODO: Fast Check Situation */}
        name="Factory DK Blast (+ Arcade?)"
        region="Storage And Arcade"
        canGetLogic={inStage && dk && blast}
      />
      <FactoryCheck
        id={3004 /* TODO: Fast Check Situation */}
        name="Factory DK Crusher Room"
        region="Production Room"
        canGetLogic={inStage && dk && strong}
        canGetBreak={inStage && (dk || diddy)}
      />
      <CompanyPool>
        <FactoryCheck
          id={3005}
          name="Factory DK Nintendo Coin"
          region="Storage And Arcade"
          canGetLogic={inStage && dk && blast && grab}
        />
      </CompanyPool>
      <FactoryCheck
        id={3010}
        name="Factory Diddy Block Tower"
        region="Testing Area"
        canGetLogic={testing && diddy && spring}
        canGetBreak={testing && (diddy || tiny) && (lanky || chunky)}
      />
      <FactoryCheck
        id={3011}
        name="Factory Diddy R&D"
        region="R&D Area"
        canGetLogic={testing && diddy && guitar && charge}
      />
      <FactoryCheck
        id={3012}
        name="Factory Diddy Chunky Room Barrel"
        region="Storage And Arcade"
        canGetLogic={testing && canSlam && diddy && vine}
        canGetBreak={testing && canSlam && diddy && dk}
      />
      <FactoryCheck
        id={3013}
        name="Factory Diddy Production Room"
        region="Production Room"
        canGetLogic={production && canSlam && diddy && spring}
        canGetBreak={production && canSlam && diddy && ((tiny && twirl) || lanky || chunky)}
      />
      <FactoryCheck
        id={3020}
        name="Factory Lanky Testing Room Barrel"
        region="Testing Area"
        canGetLogic={testing && lanky && balloon}
        canGetBreak={testing && anyKong}
      />
      <FactoryCheck
        id={3021}
        name="Factory Lanky Piano"
        region="Testing Area"
        canGetLogic={testing && lanky && canSlam && trombone}
      />
      <FactoryCheck
        id={3022}
        name="Factory Lanky Free Chunky"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3023}
        name="Factory Lanky Production Room"
        region="Production Room"
        canGetLogic={production && canSlam && lanky && stand}
        canGetBreak={production && ((lanky && stand) || tiny)}
      />
      <FactoryCheck
        id={3030}
        name="Factory Tiny Dartboard"
        region="Testing Area"
        canGetLogic={testing && tiny && mini && feather && canSlam}
      />
      <FactoryCheck
        id={3031}
        name="Factory Tiny Car Race"
        region="R&D Area"
        canGetLogic={testing && tiny && mini}
      />
      <FactoryCheck
        id={3032}
        name="Factory Tiny by Arcade"
        region="Storage And Arcade"
        canGetLogic={inStage && tiny && mini}
      />
      <FactoryCheck
        id={3033}
        name="Factory Tiny Production Room"
        region="Production Room"
        canGetLogic={production && canSlam && tiny && twirl}
        canGetBreak={production && ((tiny && twirl) || dk)}
      />
      <FactoryCheck
        id={3040}
        name="Factory Chunky Kaiju"
        region="R&D Area"
        canGetLogic={testing && chunky && punch && triangle && hunky}
      />
      <FactoryCheck
        id={3041}
        name="Factory Chunky Dark Room"
        region="Storage And Arcade"
        canGetLogic={inStage && chunky && punch && canSlam}
      />
      <FactoryCheck
        id={3042}
        name="Factory Chunky Arcade Barrel"
        region="Storage And Arcade"
        canGetLogic={inStage && chunky && punch}
      />
      <FactoryCheck
        id={3043}
        name="Factory Chunky Production Room"
        region="Production Room"
        canGetLogic={production && chunky && canSlam}
      />
      <KasplatLocations />
      <FactoryCheck
        id={3060}
        name="Factory Crate Candy"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3061}
        name="Factory Crate Funky"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <FactoryCheck
          id={3090}
          name="Factory Arena"
          region="R&D Area"
          canGetLogic={testing && dk && grab}
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
        <FactoryCheck
          id={3105}
          name="Factory Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong}
        />
      </BossPool>
      <FactoryShops />
    </div>
  )
}

export default FactoryChecks
