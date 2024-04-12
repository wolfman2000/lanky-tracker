import {
  useLankyDungeonGb,
  useLankyGreenhouseGb,
  useLankyMausoleumGb,
  useLankyRoomGb
} from '@renderer/hooks/castle'
import CastleCheck from '../CastleCheck'

const LankyBananas: React.FC = () => {
  const roomGb = useLankyRoomGb()
  const mausoleumGb = useLankyMausoleumGb()
  const dungeonGb = useLankyDungeonGb()
  return (
    <>
      <CastleCheck
        id={7020}
        name="Castle Lanky Tower"
        region="Castle Rooms"
        canGetLogic={roomGb.in}
        canGetBreak={roomGb.out}
      />
      <CastleCheck
        id={7021}
        name="Castle Lanky Greenhouse"
        region="Castle Surroundings"
        canGetLogic={useLankyGreenhouseGb()}
      />
      <CastleCheck
        id={7022}
        name="Castle Lanky Mausoleum"
        region="Castle Underground"
        canGetLogic={mausoleumGb.in}
        canGetBreak={mausoleumGb.out}
      />
      <CastleCheck
        id={7023}
        name="Castle Lanky Dungeon"
        region="Castle Underground"
        canGetLogic={dungeonGb.in}
        canGetBreak={dungeonGb.out}
      />
    </>
  )
}

export default LankyBananas
