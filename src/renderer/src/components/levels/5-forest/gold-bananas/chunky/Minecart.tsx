import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useChunkyMineGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyMinecart: React.FC = () => (
  <ToughGoldenBanana>
    <ForestCheck
      id={5040}
      name="Forest Chunky Minecart"
      region="Forest Center And Beanstalk"
      canGetLogic={useChunkyMineGb()}
    />
  </ToughGoldenBanana>
)

export default ChunkyMinecart
