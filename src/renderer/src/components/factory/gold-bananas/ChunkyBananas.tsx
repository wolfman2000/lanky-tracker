import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory,
  useSlamFactory
} from '@renderer/hooks/factory'
import { useChunky, useHunky, usePunch, useTriangle } from '@renderer/hooks/kongs'
import FactoryCheck from '../FactoryCheck'

const ChunkyBananas: React.FC = () => {
  const testing = useFactoryTesting()
  const punch = usePunch()
  const triangle = useTriangle()
  const hunky = useHunky()
  const canSlam = useSlamFactory()
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const chunky = useChunky()
  return (
    <>
      <FactoryCheck
        id={3040}
        name="Factory Chunky Kaiju"
        region="R&D Area"
        canGetLogic={testing && punch && triangle && hunky}
      />
      <FactoryCheck
        id={3041}
        name="Factory Chunky Dark Room"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && canSlam}
      />
      <FactoryCheck
        id={3042}
        name="Factory Chunky Arcade Barrel"
        region="Storage And Arcade"
        canGetLogic={inStage && punch}
      />
      <FactoryCheck
        id={3043}
        name="Factory Chunky Production Room"
        region="Production Room"
        canGetLogic={production && chunky && canSlam}
      />
    </>
  )
}

export default ChunkyBananas
