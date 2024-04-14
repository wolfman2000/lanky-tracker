import {
  useLankyFreeChunkyGb,
  useLankyPianoGb,
  useLankyProductionGb,
  useLankyTestingGb
} from '@renderer/hooks/factory'
import FactoryCheck from '../FactoryCheck'

const LankyBananas: React.FC = () => {
  const testGb = useLankyTestingGb()
  const prodGb = useLankyProductionGb()
  return (
    <>
      <FactoryCheck
        id={3020}
        name="Factory Lanky Testing Room Barrel"
        region="Testing Area"
        canGetLogic={testGb.in}
        canGetBreak={testGb.out}
      />
      <FactoryCheck
        id={3021}
        name="Factory Lanky Piano Game"
        region="Testing Area"
        canGetLogic={useLankyPianoGb()}
      />
      <FactoryCheck
        id={3022}
        name="Factory Free Chunky Item"
        region="Storage And Arcade"
        canGetLogic={useLankyFreeChunkyGb()}
      />
      <FactoryCheck
        id={3023}
        name="Factory Lanky Production Room"
        region="Production Room"
        canGetLogic={prodGb.in}
        canGetBreak={prodGb.out}
      />
    </>
  )
}

export default LankyBananas
