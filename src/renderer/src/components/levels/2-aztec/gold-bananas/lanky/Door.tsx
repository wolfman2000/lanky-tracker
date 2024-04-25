import { useLanky5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const LankyDoorTemple: React.FC = () => {
  const doorGb = useLanky5DoorGb()
  return (
    <AztecCheck
      id={2021}
      name="Aztec Lanky 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
  )
}

export default LankyDoorTemple
