import {
  useChunkyArcadeGb,
  useChunkyDarkGb,
  useChunkyKaijuGb,
  useChunkyProductionGb
} from '@renderer/hooks/factory'
import FactoryCheck from '../FactoryCheck'

const ChunkyBananas: React.FC = () => {
  return (
    <>
      <FactoryCheck
        id={3040}
        name="Factory Chunky Toy Monster"
        region="R&D Area"
        canGetLogic={useChunkyKaijuGb()}
      />
      <FactoryCheck
        id={3041}
        name="Factory Chunky Dark Room"
        region="Storage And Arcade"
        canGetLogic={useChunkyDarkGb()}
      />
      <FactoryCheck
        id={3042}
        name="Factory Chunky Barrel by Arcade"
        region="Storage And Arcade"
        canGetLogic={useChunkyArcadeGb()}
      />
      <FactoryCheck
        id={3043}
        name="Factory Chunky Production Timer"
        region="Production Room"
        canGetLogic={useChunkyProductionGb()}
      />
    </>
  )
}

export default ChunkyBananas
