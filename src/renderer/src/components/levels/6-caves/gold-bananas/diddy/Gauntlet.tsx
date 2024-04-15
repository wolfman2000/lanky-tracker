import { useDiddyGauntletGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyGauntletCabin: React.FC = () => {
  const cabinGauntlet = useDiddyGauntletGb()
  return (
    <CavesCheck
      id={6012}
      name="Caves Diddy 5 Door Cabin Lower (Gauntlet)"
      region="Cabins Area"
      canGetLogic={cabinGauntlet.in}
      canGetBreak={cabinGauntlet.out}
    />
  )
}

export default DiddyGauntletCabin
