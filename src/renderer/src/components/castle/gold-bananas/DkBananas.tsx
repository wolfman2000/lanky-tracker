import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useCastleTree, usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useCoconut, useDk, useGrab, useSniper, useStrong } from '@renderer/hooks/kongs'
import CastleCheck from '../CastleCheck'

const DkBananas: React.FC = () => {
  const tree = useCastleTree()
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const strong = useStrong()
  const grab = useGrab()
  const coconut = useCoconut()
  const sniper = useSniper()
  const dk = useDk()
  return (
    <>
      <ToughGoldenBanana>
        <CastleCheck
          id={7001}
          name="Castle DK Tree"
          region="Castle Surroundings"
          canGetLogic={tree && coconut && sniper}
        />
      </ToughGoldenBanana>
      <CastleCheck
        id={7002}
        name="Castle DK Library"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && strong}
        canGetBreak={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7003}
        name="Castle DK Minecarts"
        region="Castle Underground"
        canGetLogic={inStage && coconut && grab}
      />
      <CastleCheck
        id={7004}
        name="Castle DK Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && dk && canSlam}
      />
    </>
  )
}

export default DkBananas
