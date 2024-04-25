import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useLankyRaceGb } from '@renderer/hooks/caves'
import ForestCheck from '../../check'

const RabbitRace: React.FC = () => {
  const raceGb = useLankyRaceGb()
  return (
    <ToughGoldenBanana>
      <ForestCheck
        id={5022}
        name="Forest Lanky Rabbit Race"
        region="Owl Tree"
        canGetLogic={raceGb.in}
        canGetBreak={raceGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default RabbitRace
