import { useChunkyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyCabin: React.FC = () => (
  <CavesCheck
    id={6043}
    name="Caves Chunky 5 Door Cabin"
    region="Cabins Area"
    canGetLogic={useChunkyCabinGb()}
  />
)

export default ChunkyCabin
