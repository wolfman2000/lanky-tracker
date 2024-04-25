import { useTinyRaceGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const CarRace: React.FC = () => (
  <FactoryCheck
    id={3031}
    name="Factory Tiny Car Race"
    region="R&D Area"
    canGetLogic={useTinyRaceGb()}
  />
)

export default CarRace
