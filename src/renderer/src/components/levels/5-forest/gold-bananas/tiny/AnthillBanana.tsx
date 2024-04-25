import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBanana: React.FC = () => (
  <ForestCheck
    id={5031}
    name="Forest Tiny Anthill Banana"
    region="Owl Tree"
    canGetLogic={useTinyAntGb()}
  />
)

export default AnthillBanana
