import { useLankyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyTower: React.FC = () => {
  const roomGb = useLankyRoomGb()
  return (
    <CastleCheck
      id={7020}
      name="Castle Lanky Tower"
      region="Castle Rooms"
      canGetLogic={roomGb.in}
      canGetBreak={roomGb.out}
    />
  )
}

export default LankyTower
