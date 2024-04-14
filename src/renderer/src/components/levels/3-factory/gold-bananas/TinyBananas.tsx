import {
  useTinyArcadeGb,
  useTinyDartGb,
  useTinyProductionGb,
  useTinyRaceGb
} from '@renderer/hooks/factory'
import FactoryCheck from '../FactoryCheck'

const TinyBananas: React.FC = () => {
  const prodGb = useTinyProductionGb()
  return (
    <>
      <FactoryCheck
        id={3030}
        name="Factory Tiny Dartboard"
        region="Testing Area"
        canGetLogic={useTinyDartGb()}
      />
      <FactoryCheck
        id={3031}
        name="Factory Tiny Car Race"
        region="R&D Area"
        canGetLogic={useTinyRaceGb()}
      />
      <FactoryCheck
        id={3032}
        name="Factory Tiny Mini by Arcade"
        region="Storage And Arcade"
        canGetLogic={useTinyArcadeGb()}
      />
      <FactoryCheck
        id={3033}
        name="Factory Tiny Production Room"
        region="Production Room"
        canGetLogic={prodGb.in}
        canGetBreak={prodGb.out}
      />
    </>
  )
}

export default TinyBananas
