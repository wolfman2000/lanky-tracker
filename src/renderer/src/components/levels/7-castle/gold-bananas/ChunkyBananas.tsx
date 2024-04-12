import {
  useChunkyCryptGb,
  useChunkyRoomGb,
  useChunkyShedGb,
  useChunkyTreeGb
} from '@renderer/hooks/castle'
import CastleCheck from '../CastleCheck'

const ChunkyBananas: React.FC = () => {
  const shedGb = useChunkyShedGb()
  const treeGb = useChunkyTreeGb()
  return (
    <>
      <CastleCheck
        id={7040}
        name="Castle Chunky Tree"
        region="Castle Surroundings"
        canGetLogic={treeGb.in}
        canGetBreak={treeGb.out}
      />
      <CastleCheck
        id={7041}
        name="Castle Chunky Shed"
        region="Castle Surroundings"
        canGetLogic={shedGb.in}
        canGetBreak={shedGb.out}
      />
      <CastleCheck
        id={7042}
        name="Castle Chunky Museum"
        region="Castle Rooms"
        canGetLogic={useChunkyRoomGb()}
      />
      <CastleCheck
        id={7043}
        name="Castle Chunky Crypt"
        region="Castle Underground"
        canGetLogic={useChunkyCryptGb()}
      />
    </>
  )
}

export default ChunkyBananas
