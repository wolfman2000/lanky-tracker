import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkBlastGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ForestBlast: React.FC = () => (
  <ToughGoldenBanana>
    <ForestCheck
      id={5001}
      name="Forest Donkey Baboon Blast"
      region="Giant Mushroom Exterior"
      canGetLogic={useDkBlastGb()}
    />
  </ToughGoldenBanana>
)

export default ForestBlast
