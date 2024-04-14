import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useRoomFairy, useTreeFairy } from '@renderer/hooks/castle'
import { useShuffleFairies } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  const room = useRoomFairy()
  return (
    <>
      <CastleCheck
        id={7080}
        name="Castle Fairy (Tree Sniper Room)"
        region="Castle Surroundings"
        canGetLogic={useTreeFairy()}
      />
      <CastleCheck
        id={7081}
        name="Castle Fairy (Near Car Race)"
        region="Castle Rooms"
        canGetLogic={room.in}
        canGetBreak={room.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const fairy = useGeneralFairy()
  return (
    <>
      <CastleCheck id={7280} name="Castle Fairy Location #1" canGetLogic={fairy} />
      <CastleCheck id={7281} name="Castle Fairy Location #2" canGetLogic={fairy} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
