import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkCryptGb, useDkDungeonGb, useDkRoomGb, useDkTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../CastleCheck'

const DkBananas: React.FC = () => {
  const roomGb = useDkRoomGb()
  return (
    <>
      <ToughGoldenBanana>
        <CastleCheck
          id={7001}
          name="Castle DK Tree"
          region="Castle Surroundings"
          canGetLogic={useDkTreeGb()}
        />
      </ToughGoldenBanana>
      <CastleCheck
        id={7002}
        name="Castle DK Library"
        region="Castle Rooms"
        canGetLogic={roomGb.in}
        canGetBreak={roomGb.out}
      />
      <CastleCheck
        id={7003}
        name="Castle DK Minecarts"
        region="Castle Underground"
        canGetLogic={useDkCryptGb()}
      />
      <CastleCheck
        id={7004}
        name="Castle DK Dungeon"
        region="Castle Underground"
        canGetLogic={useDkDungeonGb()}
      />
    </>
  )
}

export default DkBananas
