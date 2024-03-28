import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecLlamaTemple,
  useAztecTinyTemple,
  useSlamAztec
} from '@renderer/hooks/aztec'
import AztecCheck from './AztecCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyGun, useAnyKong, useBoulderTech } from '@renderer/hooks/kongs'
import AztecShops from './shops'
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

const AztecChecks: React.FC = () => {
  const aztecFront = useAztecFront()
  const aztecBack = useAztecBack()
  const canSlam = useSlamAztec()
  const anyGun = useAnyGun()
  const anyKong = useAnyKong()
  const aztecTunnel = useAztecBackTunnel()
  const aztec5Door = useAztec5DoorTemple()
  const llama = useAztecLlamaTemple()
  const templeTiny = useAztecTinyTemple()
  const boulderTech = useBoulderTech()
  const [
    dk,
    coconut,
    blast,
    strong,
    diddy,
    peanut,
    charge,
    rocket,
    lanky,
    grape,
    trombone,
    stand,
    tiny,
    feather,
    sax,
    twirl,
    mini,
    chunky,
    pineapple,
    triangle,
    hunky,
    dive
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.coconut,
      state.blast,
      state.strong,
      state.diddy,
      state.peanut,
      state.charge,
      state.rocket,
      state.lanky,
      state.grape,
      state.trombone,
      state.stand,
      state.tiny,
      state.feather,
      state.sax,
      state.twirl,
      state.mini,
      state.chunky,
      state.pineapple,
      state.triangle,
      state.hunky,
      state.dive
    ])
  )
  return (
    <div className="grid">
      <AztecCheck
        id={2001}
        name="Aztec DK Free Llama"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && dk && blast}
        canGetBreak={aztecBack.out && dk && blast}
      />
      <AztecCheck
        id={2002}
        name="Aztec DK Quicksand Cave"
        region="Various Aztec Tunnels"
        canGetLogic={aztecTunnel.in && dk && strong}
        canGetBreak={aztecTunnel.out}
      />
      <AztecCheck
        id={2003}
        name="Aztec DK 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && dk && coconut}
        canGetBreak={aztec5Door.out && dk && coconut}
      />
      <AztecCheck
        id={2004}
        name="Aztec DK Free Lanky"
        region="Llama Temple"
        canGetLogic={llama.in && dive}
        canGetBreak={llama.out && dive}
      />
      <AztecCheck
        id={2010}
        name="Aztec Diddy Free Tiny"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && dive}
        canGetBreak={templeTiny.out && dive}
      />
      <AztecCheck
        id={2011}
        name="Aztec Diddy Ram Gongs"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && diddy && charge && rocket}
        canGetBreak={aztecBack.out && diddy && charge && rocket}
      />
      <ToughGoldenBanana>
        <AztecCheck
          id={2012}
          name="Aztec Diddy Vulture Race"
          region="Aztec Oasis And Totem Area"
          canGetLogic={aztecBack.in && diddy && rocket}
          canGetBreak={aztecBack.out && diddy && rocket}
        />
      </ToughGoldenBanana>
      <AztecCheck
        id={2013}
        name="Aztec Diddy 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && diddy && peanut}
        canGetBreak={aztec5Door.out && diddy && peanut}
      />
      <AztecCheck
        id={2020}
        name="Aztec Lanky Vulture"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && dive && canSlam && lanky && grape}
        canGetBreak={templeTiny.out && dive && canSlam && lanky && anyGun}
      />
      <AztecCheck
        id={2021}
        name="Aztec Lanky 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && lanky && grape}
        canGetBreak={aztec5Door.out && lanky && grape}
      />
      <AztecCheck
        id={2022}
        name="Aztec Lanky Llama Temple Barrel"
        region="Llama Temple"
        canGetLogic={llama.in && lanky && trombone && stand}
        canGetBreak={llama.out && lanky && trombone && (stand || (tiny && twirl))}
      />
      <AztecCheck
        id={2023}
        name="Aztec Lanky Matching Game"
        region="Llama Temple"
        canGetLogic={llama.in && lanky && grape}
        canGetBreak={llama.out && lanky && grape}
      />
      <AztecCheck
        id={2030}
        name="Aztec Tiny Klaptrap Room"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && tiny && mini && dive}
        canGetBreak={templeTiny.out && tiny && mini && dive}
      />
      <AztecCheck
        id={2031}
        name="Aztec Tiny 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && tiny && feather}
        canGetBreak={aztec5Door.out && tiny && feather}
      />
      <ToughGoldenBanana>
        <AztecCheck
          id={2032}
          name="Aztec Tiny Beetle Race"
          region="Aztec Oasis And Totem Area"
          canGetLogic={aztecBack.in && diddy && charge && rocket && tiny && mini && sax}
          canGetBreak={aztecBack.out && diddy && charge && rocket && tiny && mini && sax}
        />
      </ToughGoldenBanana>
      <AztecCheck
        id={2033 /* TODO: Bananaport Logic */}
        name="Aztec Tiny Llama Temple"
        region="Llama Temple"
        canGetLogic={llama.in && tiny && mini}
        canGetBreak={llama.out && tiny && mini}
      />
      <AztecCheck
        id={2040}
        name="Aztec Chunky Vases"
        region="Various Aztec Tunnels"
        canGetLogic={aztecFront.in && boulderTech && pineapple}
        canGetBreak={aztecFront.out && boulderTech && pineapple}
      />
      <AztecCheck
        id={2041}
        name="Aztec Chunky Klaptrap Room"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && chunky && triangle}
        canGetBreak={templeTiny.out && chunky && triangle}
      />
      <AztecCheck
        id={2042}
        name="Aztec Chunky Caged Barrel"
        region="Various Aztec Tunnels"
        canGetLogic={aztecBack.in && boulderTech && hunky}
        canGetBreak={aztecBack.out && boulderTech && hunky}
      />
      <AztecCheck
        id={2043}
        name="Aztec Chunky 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && chunky && pineapple}
        canGetBreak={aztec5Door.out && chunky && pineapple}
      />
      <KasplatLocations />
      <CrateLocations />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <AztecCheck
          id={2090}
          name="Aztec Arena"
          region="Tiny Temple"
          canGetLogic={templeTiny.in && dive && canSlam && lanky && grape}
          canGetBreak={templeTiny.out && dive && canSlam && lanky && anyGun}
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
        <AztecCheck
          id={1105}
          name="Aztec Boss"
          region="Troff 'N' Scoff"
          canGetLogic={aztecFront.in && anyKong}
          canGetBreak={aztecFront.out && anyKong}
        />
      </BossPool>
      <AztecShops />
    </div>
  )
}

export default AztecChecks
