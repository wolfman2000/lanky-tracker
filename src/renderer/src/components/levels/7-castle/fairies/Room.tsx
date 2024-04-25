import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useRoomFairy } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const RoomFairy: React.FC = () => {
  const room = useRoomFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <CastleCheck
          id={7081}
          name="Castle Fairy (Near Car Race)"
          region="Castle Rooms"
          canGetLogic={room.in}
          canGetBreak={room.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default RoomFairy
