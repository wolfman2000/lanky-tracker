import { useDk5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const DonkeyDoorTemple: React.FC = () => {
  const doorGb = useDk5DoorGb()
  return (
    <AztecCheck
      id={2003}
      name="Aztec Donkey 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
  )
}

export default DonkeyDoorTemple
