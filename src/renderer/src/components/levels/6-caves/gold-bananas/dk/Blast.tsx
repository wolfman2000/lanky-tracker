import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkBlastGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CavesBlast: React.FC = () => (
  <ToughGoldenBanana>
    <CavesCheck
      id={6001}
      name="Caves Donkey Baboon Blast"
      region="Main Caves Area"
      canGetLogic={useDkBlastGb()}
    />
  </ToughGoldenBanana>
)

export default CavesBlast
