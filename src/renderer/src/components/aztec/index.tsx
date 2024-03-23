import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecLlamaTemple,
  useAztecTinyTemple,
  useSlamAztec
} from '@renderer/hooks/world'
import AztecCheck from './AztecCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyGun, useAnyKong, useBoulderTech } from '@renderer/hooks/kongs'
import AztecShops from './shops'

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
    dive,
    shockwave,
    camera
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
      state.dive,
      state.shockwave,
      state.camera
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
      <AztecCheck
        id={2012}
        name="Aztec Diddy Vulture Race"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && diddy && rocket}
        canGetBreak={aztecBack.out && diddy && rocket}
      />
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
      <AztecCheck
        id={2032}
        name="Aztec Tiny Beetle Race"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && diddy && charge && rocket && tiny && mini && sax}
        canGetBreak={aztecBack.out && diddy && charge && rocket && tiny && mini && sax}
      />
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
      <AztecCheck
        id={2050}
        name="Aztec Kasplat Behind DK Stone Door"
        region="Various Aztec Tunnels"
        canGetLogic={aztecFront.in && dk && coconut && (strong || (tiny && twirl))}
        canGetBreak={aztecFront.out && dk && coconut}
      />
      <AztecCheck
        id={2051}
        name="Aztec Kasplat On Tiny Temple"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecFront.in && diddy && rocket}
        canGetBreak={aztecFront.out && diddy && rocket}
      />
      <AztecCheck
        id={2052 /* TODO: Bananaport Logic */}
        name="Aztec Kasplat Llama Temple Lava"
        region="Llama Temple"
        canGetLogic={llama.in && tiny && mini}
        canGetBreak={llama.out && tiny && mini}
      />
      <AztecCheck
        id={2053}
        name="Aztec Kasplat Hunky Chunky Barrel"
        region="Various Aztec Tunnels"
        canGetLogic={aztecBack.in}
        canGetBreak={aztecBack.out}
      />
      <AztecCheck
        id={2054}
        name="Aztec Kasplat Chunky 5-Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && chunky && pineapple}
        canGetBreak={aztec5Door.out && chunky && pineapple}
      />
      <AztecCheck
        id={2060}
        name="Aztec Crate Llama Interior"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={llama.out}
      />
      <AztecCheck
        id={2061}
        name="Aztec Crate Llama Exterior"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && diddy && rocket}
        canGetBreak={aztecBack.out && diddy && rocket}
      />
      <AztecCheck
        id={2062}
        name="Aztec Crate Gongs"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in}
        canGetBreak={aztecBack.out}
      />
      <AztecCheck
        id={2070}
        name="Aztec Dirt Oasis"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecFront.in && shockwave}
        canGetBreak={aztecFront.out && shockwave}
      />
      <AztecCheck
        id={2071}
        name="Aztec Dirt Chunky Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && chunky && pineapple && shockwave}
        canGetBreak={aztec5Door.out && chunky && pineapple && shockwave}
      />
      <AztecCheck
        id={2080}
        name="Aztec Fairy Llama Temple"
        region="Llama Temple"
        canGetLogic={llama.in && camera}
        canGetBreak={llama.out && camera}
      />
      <AztecCheck
        id={2081}
        name="Aztec Fairy 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && tiny && feather && mini && camera}
        canGetBreak={aztec5Door.out && tiny && feather && mini && camera}
      />
      <AztecCheck
        id={2090}
        name="Aztec Arena"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && dive && canSlam && lanky && grape}
        canGetBreak={templeTiny.out && dive && canSlam && lanky && anyGun}
      />
      <AztecCheck
        id={2100}
        name="Aztec DK Medal"
        region="Aztec Medal Rewards"
        canGetLogic={dk && llama.in}
        canGetBreak={dk && llama.out}
      />
      <AztecCheck
        id={2101}
        name="Aztec Diddy Medal"
        region="Aztec Medal Rewards"
        canGetLogic={diddy && (aztecBack.in || (templeTiny.in && dive && peanut))}
        canGetBreak={diddy && (aztecBack.out || (templeTiny.out && dive && peanut))}
      />
      <AztecCheck
        id={2102}
        name="Aztec Lanky Medal"
        region="Aztec Medal Rewards"
        canGetLogic={lanky && aztecBack.in}
        canGetBreak={lanky && aztecBack.out}
      />
      <AztecCheck
        id={2103}
        name="Aztec Tiny Medal"
        region="Aztec Medal Rewards"
        canGetLogic={tiny && aztecBack.in}
        canGetBreak={tiny && aztecBack.out}
      />
      <AztecCheck
        id={2104}
        name="Aztec Chunky Medal"
        region="Aztec Medal Rewards"
        canGetLogic={templeTiny.in && chunky && pineapple}
        canGetBreak={templeTiny.out && chunky && pineapple}
      />
      <AztecCheck
        id={1105}
        name="Aztec Boss"
        region="Troff 'N' Scoff"
        canGetLogic={aztecFront.in && anyKong}
        canGetBreak={aztecFront.out && anyKong}
      />
      <AztecShops />
    </div>
  )
}

export default AztecChecks
