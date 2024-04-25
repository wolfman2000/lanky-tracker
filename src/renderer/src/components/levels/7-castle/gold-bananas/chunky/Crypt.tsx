import { useChunkyCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyCrypt: React.FC = () => (
  <CastleCheck
    id={7043}
    name="Castle Chunky Crypt"
    region="Castle Underground"
    canGetLogic={useChunkyCryptGb()}
  />
)

export default ChunkyCrypt
