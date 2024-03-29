import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory,
  useSlamFactory
} from '@renderer/hooks/factory'
import {
  useAnyKong,
  useBalloon,
  useLanky,
  useStand,
  useTiny,
  useTrombone
} from '@renderer/hooks/kongs'
import FactoryCheck from '../FactoryCheck'

const LankyBananas: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const balloon = useBalloon()
  const anyKong = useAnyKong()
  const stand = useStand()
  const lanky = useLanky()
  const tiny = useTiny()
  const trombone = useTrombone()
  return (
    <>
      <FactoryCheck
        id={3020}
        name="Factory Lanky Testing Room Barrel"
        region="Testing Area"
        canGetLogic={testing && balloon}
        canGetBreak={testing && anyKong}
      />
      <FactoryCheck
        id={3021}
        name="Factory Lanky Piano"
        region="Testing Area"
        canGetLogic={testing && lanky && canSlam && trombone}
      />
      <FactoryCheck
        id={3022}
        name="Factory Lanky Free Chunky"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3023}
        name="Factory Lanky Production Room"
        region="Production Room"
        canGetLogic={production && canSlam && stand}
        canGetBreak={production && (stand || tiny)}
      />
    </>
  )
}

export default LankyBananas
