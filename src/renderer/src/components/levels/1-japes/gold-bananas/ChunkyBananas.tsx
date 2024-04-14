import {
  useChunkyBoulderGb,
  useChunkyCagedGb,
  useChunkyHiveGb,
  useChunkyUndergroundGb
} from '@renderer/hooks/japes'
import JapesCheck from '../JapesCheck'

const ChunkyBananas: React.FC = () => {
  const chunkyBoulderGb = useChunkyBoulderGb()
  const chunkyCageGb = useChunkyCagedGb()
  const chunkyHiveGb = useChunkyHiveGb()
  const chunkyUndergroundGb = useChunkyUndergroundGb()
  return (
    <>
      <JapesCheck
        id={1040}
        name="Japes Chunky Boulder"
        region="Japes Lowlands"
        canGetLogic={chunkyBoulderGb}
      />
      <JapesCheck
        id={1041}
        name="Japes Chunky Timed Caged Banana"
        region="Japes Hillside"
        canGetLogic={chunkyCageGb}
      />
      <JapesCheck
        id={1042}
        name="Japes Chunky Giant Bonus Barrel"
        region="Hive Tunnel Area"
        canGetLogic={chunkyHiveGb}
      />
      <JapesCheck
        id={1043}
        name="Japes Chunky Underground"
        region="Japes Caves And Mines"
        canGetLogic={chunkyUndergroundGb.in}
        canGetBreak={chunkyUndergroundGb.out}
      />
    </>
  )
}

export default ChunkyBananas
