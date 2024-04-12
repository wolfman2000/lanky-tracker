import {
  useTinyChasmGb,
  useTinyMausoleumGb,
  useTinyRoomGb,
  useTinyTrashGb
} from '@renderer/hooks/castle'
import CastleCheck from '../CastleCheck'

const TinyBananas: React.FC = () => {
  const trashGb = useTinyTrashGb()
  const mausoleumGb = useTinyMausoleumGb()
  return (
    <>
      <CastleCheck
        id={7030}
        name="Castle Tiny Car Race"
        region="Castle Rooms"
        canGetLogic={useTinyRoomGb()}
      />
      <CastleCheck
        id={7031}
        name="Castle Tiny Trash Can"
        region="Castle Surroundings"
        canGetLogic={trashGb.in}
        canGetBreak={trashGb.out}
      />
      <CastleCheck
        id={7032}
        name="Castle Tiny Mausoleum"
        region="Castle Underground"
        canGetLogic={mausoleumGb.in}
        canGetBreak={mausoleumGb.out}
      />
      <CastleCheck
        id={7033}
        name="Castle Tiny Over Chasm"
        region="Castle Underground"
        canGetLogic={useTinyChasmGb()}
      />
    </>
  )
}

export default TinyBananas
