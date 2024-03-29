import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useCharge, usePeanut, useRocket, useSniper, useVine } from '@renderer/hooks/kongs'
import CastleCheck from '../CastleCheck'

const DiddyBananas: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const peanut = usePeanut()
  const charge = useCharge()
  const rocket = useRocket()
  const sniper = useSniper()
  const vine = useVine()
  return (
    <>
      <CastleCheck
        id={7010}
        name="Castle Diddy Above Castle"
        region="Castle Surroundings"
        canGetLogic={inStage && rocket}
      />
      <CastleCheck
        id={7011}
        name="Castle Diddy Ballroom"
        region="Castle Rooms"
        canGetLogic={inStage && canSlam && rocket}
      />
      <CastleCheck
        id={7012}
        name="Castle Diddy Crypt"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7013}
        name="Castle Diddy Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && canSlam && peanut && sniper && vine}
      />
    </>
  )
}

export default DiddyBananas
