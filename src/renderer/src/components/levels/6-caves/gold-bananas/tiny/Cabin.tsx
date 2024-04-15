import { useTinyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TinyCabin: React.FC = () => {
  const cabinCb = useTinyCabinGb()
  return (
    <CavesCheck
      id={6033}
      name="Caves Tiny 5 Door Cabin"
      region="Cabins Area"
      canGetLogic={cabinCb.in}
      canGetBreak={cabinCb.out}
    />
  )
}

export default TinyCabin
