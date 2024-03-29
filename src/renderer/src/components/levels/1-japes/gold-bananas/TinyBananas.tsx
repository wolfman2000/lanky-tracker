import { useJapesHive, useJapesRambi, useJapesSideArea, useSlamJapes } from '@renderer/hooks/japes'
import { useAnyMusic, useFeather, useMini, useOrange, useTiny } from '@renderer/hooks/kongs'
import JapesCheck from '../JapesCheck'

const TinyBananas: React.FC = () => {
  const canSlam = useSlamJapes()
  const japesSide = useJapesSideArea()
  const tiny = useTiny()
  const japesRambi = useJapesRambi()
  const feather = useFeather()
  const mini = useMini()
  const japesHive = useJapesHive()
  const orange = useOrange()
  const anyMusic = useAnyMusic()
  return (
    <>
      <JapesCheck
        id={1030}
        name="Japes Tiny Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && tiny && canSlam}
      />
      <JapesCheck
        id={1031}
        name="Japes Tiny Feather Gate Barrel"
        region="Japes Lowlands"
        canGetLogic={japesSide && feather}
      />
      <JapesCheck
        id={1032}
        name="Japes Tiny Stump"
        region="Hive Tunnel Area"
        canGetLogic={japesHive && mini}
      />
      <JapesCheck
        id={1033}
        name="Japes Tiny Beehive"
        region="Hive Tunnel Area"
        canGetLogic={japesHive && mini && canSlam && (anyMusic || orange)}
        canGetBreak={japesHive && mini && canSlam}
      />
    </>
  )
}

export default TinyBananas
