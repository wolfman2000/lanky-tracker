import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatKlobber, useDefeatKlump } from '@renderer/hooks/enemies'
import { usePeanut } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Diddy5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const peanut = usePeanut()
  const klobber = useDefeatKlobber()
  const klump = useDefeatKlump()
  return (
    <DropPool>
      <AztecCheck
        id={2328}
        name="Aztec Enemy: Diddy 5DT End Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2329}
        name="Aztec Enemy: Diddy 5DT End Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2330}
        name="Aztec Enemy: Diddy 5DT End Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2331}
        name="Aztec Enemy: Diddy 5DT Start Left 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2332}
        name="Aztec Enemy: Diddy 5DT Start Left 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2333}
        name="Aztec Enemy: Diddy 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klump}
        canGetBreak={logicBreak(door) && peanut && klump}
      />
      <AztecCheck
        id={2334}
        name="Aztec Enemy: Diddy 5DT Second Switch"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
    </DropPool>
  )
}

export default Diddy5Enemies
