import { useTiny5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const TinyDoorTemple: React.FC = () => {
  const doorGb = useTiny5DoorGb()
  return (
    <AztecCheck
      id={2031}
      name="Aztec Tiny 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
  )
}

export default TinyDoorTemple
