import DropPool from '@renderer/components/pools/Drops'
import {
  useDefeatBat,
  useDefeatKlump,
  useDefeatKosha,
  useDefeatZinger
} from '@renderer/hooks/enemies'
import { useForestDay, useForestNight, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import { useAnyKong, useDiddy, useDk, usePunch, useStrong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../check'

const MillsEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const bat = useDefeatBat()
  const kosha = useDefeatKosha()
  const anyKong = useAnyKong()
  const diddy = useDiddy()
  const dk = useDk()
  const strong = useStrong()
  const night = useForestNight()
  const day = useForestDay()
  const punch = usePunch()
  return (
    <DropPool>
      <ForestCheck
        id={5330}
        name="Forest Enemy: Near Snide"
        region="Forest Mills"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5331}
        name="Forest Enemy: Near Iso Coin"
        region="Forest Mills"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5333}
        name="Forest Enemy: Near Dark Attic"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5334}
        name="Forest Enemy: Near Well Exit"
        region="Forest Mills"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5335}
        name="Forest Enemy: Near Blue Tunnel"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5346}
        name="Forest Enemy: Mill Inside Front"
        region="Forest Mills"
        canGetLogic={day.in && zinger}
        canGetBreak={logicBreak(day) && zinger}
      />
      <ForestCheck
        id={5347}
        name="Forest Enemy: Mill Inside Rear"
        region="Forest Mills"
        canGetLogic={day.in && punch && zinger}
        canGetBreak={logicBreak(day) && punch && zinger}
      />
      <ForestCheck
        id={5344}
        name="Forest Enemy: Winch Inside"
        region="Forest Mills"
        canGetLogic={inStage && diddy && canSlam && bat}
      />
      <ForestCheck
        id={5336}
        name="Forest Enemy: Thornvine 0"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5337}
        name="Forest Enemy: Thornvine 1"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5338}
        name="Forest Enemy: Thornvine 2"
        region="Forest Mills"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5339}
        name="Forest Enemy: Thornvine Entrance"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />

      <ForestCheck
        id={5345}
        name="Forest Enemy: Thornvine Barn Inside"
        region="Forest Mills"
        canGetLogic={night.in && strong && canSlam && kosha}
        canGetBreak={logicBreak(night) && dk && canSlam && kosha}
      />
    </DropPool>
  )
}

export default MillsEnemies
