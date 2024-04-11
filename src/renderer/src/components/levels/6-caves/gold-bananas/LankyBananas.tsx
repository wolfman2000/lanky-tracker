import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useLankyCabinGb,
  useLankyCastleGb,
  useLankyIglooGb,
  useLankyRaceGb
} from '@renderer/hooks/caves'
import CavesCheck from '../CavesCheck'

const LankyBananas: React.FC = () => {
  const raceGb = useLankyRaceGb()
  const iglooGb = useLankyIglooGb()
  const cabinGb = useLankyCabinGb()
  return (
    <>
      <ToughGoldenBanana>
        <CavesCheck
          id={6020}
          name="Caves Lanky Beetle Race"
          region="Main Caves Area"
          canGetLogic={raceGb.in}
          canGetBreak={raceGb.out}
        />
      </ToughGoldenBanana>
      <CavesCheck
        id={6021}
        name="Caves Lanky Castle"
        region="Main Caves Area"
        canGetLogic={useLankyCastleGb()}
      />
      <CavesCheck
        id={6022}
        name="Caves Lanky 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={iglooGb.in}
        canGetBreak={iglooGb.out}
      />
      <CavesCheck
        id={6023}
        name="Caves Lanky 1 Door Cabin"
        region="Cabins Area"
        canGetLogic={cabinGb.in}
        canGetBreak={cabinGb.out}
      />
    </>
  )
}

export default LankyBananas
