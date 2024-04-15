import { useChunky5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const ChunkyDoorTemple: React.FC = () => {
  const doorGb = useChunky5DoorGb()
  return (
    <AztecCheck
      id={2043}
      name="Aztec Chunky 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
  )
}

export default ChunkyDoorTemple
