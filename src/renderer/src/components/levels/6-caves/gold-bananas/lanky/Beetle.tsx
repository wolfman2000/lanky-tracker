import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useLankyRaceGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const BeetleRace: React.FC = () => {
  const raceGb = useLankyRaceGb()
  return (
    <ToughGoldenBanana>
      <CavesCheck
        id={6020}
        name="Caves Lanky Beetle Race"
        region="Main Caves Area"
        canGetLogic={raceGb.in}
        canGetBreak={raceGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default BeetleRace
