import { useDkRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkLibrary: React.FC = () => {
  const roomGb = useDkRoomGb()
  return (
    <CastleCheck
      id={7002}
      name="Castle Donkey Library"
      region="Castle Rooms"
      canGetLogic={roomGb.in}
      canGetBreak={roomGb.out}
    />
  )
}

export default DkLibrary
