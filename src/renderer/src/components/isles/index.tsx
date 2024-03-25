import {
  useAllGun,
  useAnyKong,
  useBalloon,
  useBongos,
  useBoulderTech,
  useCharge,
  useCoconut,
  useFeather,
  useGone,
  useGrab,
  useGrape,
  useGuitar,
  useHunky,
  useMini,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket,
  useSax,
  useSpring,
  useSprint,
  useStrong,
  useTriangle,
  useTrombone,
  useTwirl
} from '@renderer/hooks/kongs'
import IslesCheck from './IslesCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayHelm } from '@renderer/hooks/helm'
import IslesShops from './shops'
import DirtAztec from './DirtAztec'
import {
  useIslesKremAscent,
  useIslesKremTop,
  useIslesRocket,
  useIslesUpper
} from '@renderer/hooks/isles'
import { usePlayJapes } from '@renderer/hooks/japes'
import { usePlayAztec } from '@renderer/hooks/aztec'
import { usePlayFactory } from '@renderer/hooks/factory'
import { usePlayGalleon, useSlamGalleon } from '@renderer/hooks/galleon'
import { usePlayForest } from '@renderer/hooks/forest'
import { usePlayCaves } from '@renderer/hooks/caves'
import { usePlayCastle } from '@renderer/hooks/castle'

const IsleChecks: React.FC = () => {
  const [
    dk,
    diddy,
    lanky,
    tiny,
    chunky,
    dive,
    slam,
    vine,
    orange,
    sniper,
    camera,
    shockwave,
    key4,
    fairies
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.diddy,
      state.lanky,
      state.tiny,
      state.chunky,
      state.dive,
      state.slam,
      state.vine,
      state.orange,
      state.sniper,
      state.camera,
      state.shockwave,
      state.key4,
      state.fairies
    ])
  )
  const anyKong = useAnyKong()
  const allGun = useAllGun()
  const islesKremAscent = useIslesKremAscent()
  const coconut = useCoconut()
  const bongos = useBongos()
  const grab = useGrab()
  const strong = useStrong()
  const spring = useSpring()
  const peanut = usePeanut()
  const rocket = useRocket()
  const guitar = useGuitar()
  const grape = useGrape()
  const trombone = useTrombone()
  const balloon = useBalloon()
  const sprint = useSprint()
  const twirl = useTwirl()
  const punch = usePunch()
  const pineapple = usePineapple()
  const gone = useGone()
  const hunky = useHunky()
  const boulderTech = useBoulderTech()
  const playFactory = usePlayFactory()
  const playCaves = usePlayCaves()
  const playCastle = usePlayCastle()
  const playGalleon = usePlayGalleon()
  const islesUpper = useIslesUpper()
  const feather = useFeather()
  const islesKremTop = useIslesKremTop()
  const islesJetpack = useIslesRocket()
  const sax = useSax()
  const mini = useMini()
  const triangle = useTriangle()
  const charge = useCharge()
  const playJapes = usePlayJapes()
  const playForest = usePlayForest()
  const playAztec = usePlayAztec()
  const playHelm = usePlayHelm()
  const slamGalleon = useSlamGalleon()
  return (
    <div className="grid">
      <IslesCheck id={1} name="Isles DK Japes Rock" region="Main Isle" canGetLogic={anyKong} />
      <IslesCheck
        id={2}
        name="Isles DK Caged Banana"
        region="Krem Isle"
        canGetLogic={coconut && islesKremAscent}
      />
      <IslesCheck
        id={3}
        name="Isles DK Instrument Pad"
        region="Japes-Forest Lobbies"
        canGetLogic={bongos && playFactory && grab}
        canGetBreak={bongos && playFactory && (diddy || tiny)}
      />
      <IslesCheck
        id={4}
        name="Isles DK Lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={playCaves && punch && strong}
        canGetBreak={playCaves && punch && (twirl || orange)}
      />
      <IslesCheck
        id={10}
        name="Isles Diddy Snides Lobby"
        region="Krem Isle"
        canGetLogic={islesKremAscent && spring}
        canGetBreak={islesKremAscent && boulderTech && (diddy || tiny)}
      />
      <IslesCheck
        id={11}
        name="Isles Diddy Caged Banana"
        region="Main Isle"
        canGetLogic={key4 && peanut && rocket && boulderTech && trombone}
        canGetBreak={key4 && peanut && (dk || (tiny && twirl))}
      />
      <IslesCheck
        id={12}
        name="Isles Diddy Summit"
        region="Main Isle"
        canGetLogic={islesJetpack && rocket && diddy}
        canGetBreak={key4 && tiny && twirl}
      />
      <IslesCheck
        id={13}
        name="Isles Diddy Instrument Pad"
        region="Caves-Helm Lobbies"
        canGetLogic={playCaves && rocket && guitar}
        canGetBreak={playCaves && boulderTech && twirl && guitar}
      />
      <IslesCheck id={20} name="Isles Lanky Caged Banana" region="Krem Isle" canGetLogic={grape} />
      <IslesCheck
        id={21}
        name="Isles Lanky Prison Orangsprint"
        region="Krem Isle"
        canGetLogic={lanky && sprint}
        canGetBreak={dk}
      />
      <IslesCheck
        id={22}
        name="Isles Lanky Instrument Pad"
        region="Main Isle"
        canGetLogic={playJapes && boulderTech && trombone}
      />
      <IslesCheck
        id={23}
        name="Isles Lanky Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playCastle && boulderTech && balloon}
        canGetBreak={playCastle && twirl}
      />
      <IslesCheck
        id={30}
        name="Isles Tiny Caged Banana"
        region="Outer Isles"
        canGetLogic={feather}
      />
      <IslesCheck
        id={31}
        name="Isles Tiny Instrument Pad"
        region="Krem Isle"
        canGetLogic={islesKremTop && sax}
      />
      <IslesCheck
        id={32}
        name="Isles Tiny Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={playAztec && diddy && charge && tiny && twirl}
        canGetBreak={playAztec && diddy && charge}
      />
      <IslesCheck
        id={33}
        name="Isles Tiny Galleon Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={chunky && slamGalleon && dive && tiny && twirl && mini}
        canGetBreak={chunky && slamGalleon && dive && tiny && mini}
      />
      <IslesCheck
        id={40}
        name="Isles Chunky Caged Banana"
        region="Main Isle"
        canGetLogic={pineapple}
      />
      <IslesCheck
        id={41}
        name="Isles Chunky Instrument Pad"
        region="Main Isle"
        canGetLogic={islesUpper && boulderTech && triangle}
      />
      <IslesCheck
        id={42}
        name="Isles Chunky Pound The X"
        region="Outer Isles"
        canGetLogic={islesKremTop && sax && chunky && hunky && slam != 0}
      />
      <IslesCheck
        id={43}
        name="Isles Chunky Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playHelm && gone && vine}
        canGetBreak={playHelm && gone && tiny && twirl}
      />
      <IslesCheck
        id={47}
        name="Isles Rareware Banana"
        region="Outer Isles"
        canGetLogic={fairies >= 5 && mini}
      />
      <IslesCheck
        id={50}
        name="Isles Kasplat Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playHelm && sniper && coconut}
        canGetBreak={playHelm && twirl}
      />
      <IslesCheck
        id={51}
        name="Isles Kasplat Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playCastle && coconut}
      />
      <IslesCheck
        id={52}
        name="Isles Kasplat Caves Lobby Punch"
        region="Caves-Helm Lobbies"
        canGetLogic={playCaves && punch}
      />
      <IslesCheck
        id={53}
        name="Isles Kasplat Factory Lobby Box"
        region="Japes-Forest Lobbies"
        canGetLogic={playFactory && punch}
      />
      <IslesCheck
        id={54}
        name="Isles Kasplat Galleon Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={playGalleon && anyKong}
      />
      <IslesCheck
        id={70}
        name="Isles Dirt Training Grounds Back"
        region="Main Isle"
        canGetLogic={anyKong && shockwave}
      />
      <IslesCheck
        id={71}
        name="Isles Dirt Banana Hoard"
        region="Main Isle"
        canGetLogic={anyKong && vine && shockwave}
      />
      <IslesCheck
        id={72}
        name="Isles Dirt Back of Prison"
        region="Krem Isle"
        canGetLogic={anyKong && shockwave}
      />
      <IslesCheck
        id={73}
        name="Isles Dirt Under Caves Lobby"
        region="Main Isle"
        canGetLogic={anyKong && shockwave}
      />
      <DirtAztec />
      <IslesCheck
        id={75}
        name="Isles Dirt Cabin Isle"
        region="Outer Isles"
        canGetLogic={key4 && anyKong && shockwave}
      />
      <IslesCheck
        id={76}
        name="Isles Dirt Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playCastle && boulderTech && balloon && shockwave}
        canGetBreak={playCastle && twirl && shockwave}
      />
      <IslesCheck
        id={80}
        name="Isles Outer Fairy"
        region="Outer Isles"
        canGetLogic={anyKong && camera}
      />
      <IslesCheck
        id={81}
        name="Isles Factory Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={playFactory && punch && camera}
      />
      <IslesCheck
        id={82 /* TODO: Switchsanity */}
        name="Isles Forest Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={playForest && tiny && feather && camera}
      />
      <IslesCheck
        id={83}
        name="Isles Krem Fairy"
        region="Krem Isle"
        canGetLogic={islesKremTop && camera}
      />
      <IslesCheck
        id={90}
        name="Isles Snide Arena"
        region="Krem Isle"
        canGetLogic={islesKremAscent && boulderTech}
      />
      <IslesCheck
        id={91}
        name="Isles Forest Arena"
        region="Outer Isles"
        canGetLogic={key4 && allGun && gone}
      />
      <IslesShops />
    </div>
  )
}

export default IsleChecks
