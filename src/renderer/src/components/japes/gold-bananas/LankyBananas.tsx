import {
  useJapesPainting,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes,
  useSlamJapes
} from '@renderer/hooks/japes'
import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useGrape,
  useLanky,
  useSlam,
  useStand
} from '@renderer/hooks/kongs'
import JapesCheck from '../JapesCheck'

const LankyBananas: React.FC = () => {
  const inStage = usePlayJapes()
  const canSlam = useSlamJapes()
  const japesRambi = useJapesRambi()
  const japesSide = useJapesSideArea()
  const lanky = useLanky()
  const grape = useGrape()
  const stand = useStand()
  const anyKong = useAnyKong()
  const slam = useSlam()
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  const japesPaintingInside = useJapesPainting()
  return (
    <>
      <JapesCheck
        id={1020}
        name="Japes Lanky Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && lanky && canSlam}
      />
      <JapesCheck
        id={1021}
        name="Japes Lanky Grape Gate"
        region="Japes Hillside"
        canGetLogic={japesSide && grape}
      />
      <JapesCheck
        id={1022}
        name="Japes Lanky Slope"
        region="Stormy Tunnel Area"
        canGetLogic={inStage && stand}
        canGetBreak={inStage && anyKong}
      />
      <JapesCheck
        id={1023 /* TODO: FTA? */}
        name="Japes Lanky Painting Room"
        region="Japes Caves And Mines"
        canGetLogic={lanky && slam && japesPaintingInside.in && (anyGun || anyMusic)}
        canGetBreak={lanky && slam && japesPaintingInside.out && (anyGun || anyMusic)}
      />
    </>
  )
}

export default LankyBananas
