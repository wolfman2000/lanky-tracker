import { useTinyCabinGb, useTinyCaveGb, useTinyIglooGb, useTinyPortGb } from '@renderer/hooks/caves'
import CavesCheck from '../CavesCheck'

const TinyBananas: React.FC = () => {
  const portGb = useTinyPortGb()
  const cabinCb = useTinyCabinGb()
  return (
    <>
      <CavesCheck
        id={6030}
        name="Caves Tiny Cave Barrel"
        region="Main Caves Area"
        canGetLogic={useTinyCaveGb()}
      />
      <CavesCheck
        id={6031}
        name="Caves Tiny Monkeyport Igloo"
        region="Igloo Area"
        canGetLogic={portGb.in}
        canGetBreak={portGb.out}
      />
      <CavesCheck
        id={6032}
        name="Caves Tiny 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={useTinyIglooGb()}
      />
      <CavesCheck
        id={6033}
        name="Caves Tiny 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={cabinCb.in}
        canGetBreak={cabinCb.out}
      />
    </>
  )
}

export default TinyBananas
