import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkTree: React.FC = () => (
  <ToughGoldenBanana>
    <CastleCheck
      id={7001}
      name="Castle Donkey Tree Sniping"
      region="Castle Surroundings"
      canGetLogic={useDkTreeGb()}
    />
  </ToughGoldenBanana>
)

export default DkTree
