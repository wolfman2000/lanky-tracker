import {
  useDiddyCryptGb,
  useDiddyDungeonGb,
  useDiddyRoomGb,
  useDiddyTopGb
} from '@renderer/hooks/castle'
import CastleCheck from '../CastleCheck'

const DiddyBananas: React.FC = () => {
  return (
    <>
      <CastleCheck
        id={7010}
        name="Castle Diddy Above Castle"
        region="Castle Surroundings"
        canGetLogic={useDiddyTopGb()}
      />
      <CastleCheck
        id={7011}
        name="Castle Diddy Ballroom"
        region="Castle Rooms"
        canGetLogic={useDiddyRoomGb()}
      />
      <CastleCheck
        id={7012}
        name="Castle Diddy Crypt"
        region="Castle Underground"
        canGetLogic={useDiddyCryptGb()}
      />
      <CastleCheck
        id={7013}
        name="Castle Diddy Dungeon"
        region="Castle Underground"
        canGetLogic={useDiddyDungeonGb()}
      />
    </>
  )
}

export default DiddyBananas
