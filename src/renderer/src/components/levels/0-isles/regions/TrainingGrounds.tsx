import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import Hoard from '../dirt/Hoard'
import TrainingRear from '../dirt/TrainingRear'

const TrainingGroundsChecks: React.FC = () => (
  <RainbowCoinPool>
    <TrainingRear />
    <Hoard />
  </RainbowCoinPool>
)

export default TrainingGroundsChecks
