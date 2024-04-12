import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useDkBlastGb,
  useCavesDkCabinBee as useDkCabinGb,
  useDkIglooGb,
  useDkRotateGb
} from '@renderer/hooks/caves'
import CavesCheck from '../CavesCheck'

const DkBananas: React.FC = () => {
  const cabinGb = useDkCabinGb()
  const iglooGb = useDkIglooGb()
  return (
    <>
      <ToughGoldenBanana>
        <CavesCheck
          id={6001}
          name="Caves DK Baboon Blast"
          region="Main Caves Area"
          canGetLogic={useDkBlastGb()}
        />
      </ToughGoldenBanana>
      <CavesCheck
        id={6002}
        name="Caves DK 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={iglooGb.in}
        canGetBreak={iglooGb.out}
      />
      <CavesCheck
        id={6003}
        name="Caves DK Rotating Cabin"
        region="Cabins Area"
        canGetLogic={useDkRotateGb()}
      />
      <CavesCheck
        id={6004}
        name="Caves DK 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={cabinGb.in}
        canGetBreak={cabinGb.out}
      />
    </>
  )
}

export default DkBananas
