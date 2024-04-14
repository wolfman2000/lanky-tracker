import {
  useAztec5DoorTemple,
  useAztecFront,
  useAztecLlamaTemple,
  useAztecTinyTemple
} from '@renderer/hooks/aztec'
import {
  useDefeatKaboom,
  useDefeatKlobber,
  useDefeatKlump,
  useDefeatPurpleKlaptrap,
  useDefeatZinger
} from '@renderer/hooks/enemies'
import {
  useAnyKong,
  useCoconut,
  useDive,
  useFeather,
  useGrape,
  usePeanut,
  usePineapple
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from './AztecCheck'

const EnemyLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const tiny = useAztecTinyTemple()
  const llama = useAztecLlamaTemple()
  const door = useAztec5DoorTemple()
  const coconut = useCoconut()
  const peanut = usePeanut()
  const grape = useGrape()
  const feather = useFeather()
  const pineapple = usePineapple()
  const dive = useDive()
  const zinger = useDefeatZinger()
  const kaboom = useDefeatKaboom()
  const klaptrap = useDefeatPurpleKlaptrap()
  const klobber = useDefeatKlobber()
  const klump = useDefeatKlump()

  return (
    <>
      <AztecCheck
        id={2300}
        name="Aztec Enemy: Vase 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple}
        canGetBreak={logicBreak(inStage) && pineapple}
      />
      <AztecCheck
        id={2301}
        name="Aztec Enemy: Vase 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple}
        canGetBreak={logicBreak(inStage) && pineapple}
      />
      <AztecCheck
        id={2304}
        name="Aztec Enemy: Tunnel Cage 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2305}
        name="Aztec Enemy: Tunnel Cage 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2306}
        name="Aztec Enemy: Tunnel Cage 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2307}
        name="Aztec Enemy: Tunnel Cage 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2308}
        name="Aztec Enemy: Starting Tunnel 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2309}
        name="Aztec Enemy: Starting Tunnel 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2310}
        name="Aztec Enemy: Starting Tunnel 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2311}
        name="Aztec Enemy: Starting Tunnel 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2312}
        name="Aztec Enemy: Oasis Door"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2313}
        name="Aztec Enemy: Outside Llama"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2314}
        name="Aztec Enemy: Outside Tower"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2315}
        name="Aztec Enemy: Near Candy"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2316}
        name="Aztec Enemy: Around Totem"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2317}
        name="Aztec Enemy: Outside 5DT"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2318}
        name="Aztec Enemy: Near Snoop Tunnel"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      {/*Aztec...lobby enemies used to be defined here.*/}
      <AztecCheck
        id={2319}
        name="Aztec Enemy: DK 5DT Start Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom}
        canGetBreak={logicBreak(door) && coconut && kaboom}
      />
      <AztecCheck
        id={2320}
        name="Aztec Enemy: DK 5DT Start Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom}
        canGetBreak={logicBreak(door) && coconut && kaboom}
      />
      <AztecCheck
        id={2321}
        name="Aztec Enemy: DK 5DT Start Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom}
        canGetBreak={logicBreak(door) && coconut && kaboom}
      />
      <AztecCheck
        id={2322}
        name="Aztec Enemy: DK 5DT End Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom}
        canGetBreak={logicBreak(door) && coconut && kaboom}
      />
      <AztecCheck
        id={2323}
        name="Aztec Enemy: DK 5DT End Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom}
        canGetBreak={logicBreak(door) && coconut && kaboom}
      />
      <AztecCheck
        id={2324}
        name="Aztec Enemy: DK 5DT End Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom}
        canGetBreak={logicBreak(door) && coconut && kaboom}
      />
      <AztecCheck
        id={2325}
        name="Aztec Enemy: DK 5DT End Path 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2326}
        name="Aztec Enemy: DK 5DT End Path 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2327}
        name="Aztec Enemy: DK 5DT Start Path"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2328}
        name="Aztec Enemy: Diddy 5DT End Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2329}
        name="Aztec Enemy: Diddy 5DT End Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2330}
        name="Aztec Enemy: Diddy 5DT End Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2331}
        name="Aztec Enemy: Diddy 5DT Start Left 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2332}
        name="Aztec Enemy: Diddy 5DT Start Left 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2333}
        name="Aztec Enemy: Diddy 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klump}
        canGetBreak={logicBreak(door) && peanut && klump}
      />
      <AztecCheck
        id={2334}
        name="Aztec Enemy: Diddy 5DT Second Switch"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2335}
        name="Aztec Enemy: Lanky 5DT Joining Paths"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2336}
        name="Aztec Enemy: Lanky 5DT End Trap"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2337}
        name="Aztec Enemy: Lanky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2338}
        name="Aztec Enemy: Tiny 5DT Start Right Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2339}
        name="Aztec Enemy: Tiny 5DT Start Left Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2340}
        name="Aztec Enemy: Tiny 5DT Start Right Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2341}
        name="Aztec Enemy: Tiny 5DT Start Left Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2342}
        name="Aztec Enemy: Tiny 5DT Reward 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2343}
        name="Aztec Enemy: Tiny 5DT Reward 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2344}
        name="Aztec Enemy: Tiny 5DT Dead End 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2345}
        name="Aztec Enemy: Tiny 5DT Dead End 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2346}
        name="Aztec Enemy: Chunky 5DT Start Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2347}
        name="Aztec Enemy: Chunky 5DT Start Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2348}
        name="Aztec Enemy: Chunky 5DT Second Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2349}
        name="Aztec Enemy: Chunky 5DT Second Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2350}
        name="Aztec Enemy: Chunky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && zinger}
        canGetBreak={logicBreak(door) && pineapple && zinger}
      />
      <AztecCheck
        id={2351}
        name="Aztec Enemy: Llama Kong Free Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2352}
        name="Aztec Enemy: Llama Dino Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      {/* Matching enemies used to be here.*/}
      <AztecCheck
        id={2355}
        name="Aztec Enemy: Llama Right"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2356}
        name="Aztec Enemy: Llama Left"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2357}
        name="Aztec Enemy: Llama Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2358}
        name="Aztec Enemy: Llama Slam Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      {/* Klaptrap Room Enemies used to be defined here. */}
      <AztecCheck
        id={2379}
        name="Aztec Enemy: TT Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2380}
        name="Aztec Enemy: TT Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2381}
        name="Aztec Enemy: TT Main 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2382}
        name="Aztec Enemy: TT Main 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2383}
        name="Aztec Enemy: TT Main 2"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2384}
        name="Aztec Enemy: TT Kong 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2385}
        name="Aztec Enemy: TT Kong 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2386}
        name="Aztec Enemy: TT Kong 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2387}
        name="Aztec Enemy: TT Kong 3"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2388}
        name="Aztec Enemy: TT Kong 4"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
    </>
  )
}

export default EnemyLocations
