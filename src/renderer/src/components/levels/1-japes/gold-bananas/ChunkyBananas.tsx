import {
  useJapesHive,
  useJapesRambi,
  useJapesUnderground,
  usePlayJapes,
  useSlamJapes
} from '@renderer/hooks/japes'
import {
  useBoulderTech,
  useDiddy,
  useDk,
  useHunky,
  usePineapple,
  useTiny,
  useTwirl,
  useVine
} from '@renderer/hooks/kongs'
import JapesCheck from '../JapesCheck'

const ChunkyBananas: React.FC = () => {
  const inStage = usePlayJapes()
  const boulderTech = useBoulderTech()
  const japesUnder = useJapesUnderground()
  const canSlam = useSlamJapes()
  const japesRambi = useJapesRambi()
  const japesHive = useJapesHive()
  const hunky = useHunky()
  const pineapple = usePineapple()
  const vine = useVine()
  const twirl = useTwirl()
  const dk = useDk()
  const tiny = useTiny()
  const diddy = useDiddy()
  return (
    <>
      <JapesCheck
        id={1040}
        name="Japes Chunky Boulder"
        region="Japes Lowlands"
        canGetLogic={inStage && boulderTech}
      />
      <JapesCheck
        id={1041}
        name="Japes Chunky Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && boulderTech && canSlam}
      />
      <JapesCheck
        id={1042}
        name="Japes Chunky Giant Bonus Barrel"
        region="Hive Tunnel Area"
        canGetLogic={japesHive && hunky}
      />
      <JapesCheck
        id={1043}
        name="Japes Chunky Underground"
        region="Japes Caves And Mines"
        canGetLogic={japesUnder && pineapple && vine}
        canGetBreak={japesUnder && (dk || twirl || ((tiny || diddy) && vine))}
      />
    </>
  )
}

export default ChunkyBananas
