import { useTinyCagedGb, useTinyGateGb, useTinyHiveGb, useTinyStumpGb } from '@renderer/hooks/japes'
import JapesCheck from '../JapesCheck'

const TinyBananas: React.FC = () => {
  const hiveGb = useTinyHiveGb()
  return (
    <>
      <JapesCheck
        id={1030}
        name="Japes Tiny Timed Cage Banana"
        region="Japes Hillside"
        canGetLogic={useTinyCagedGb()}
      />
      <JapesCheck
        id={1031}
        name="Japes Tiny Feather Gate Barrel"
        region="Japes Lowlands"
        canGetLogic={useTinyGateGb()}
      />
      <JapesCheck
        id={1032}
        name="Japes Tiny Stump"
        region="Hive Tunnel Area"
        canGetLogic={useTinyStumpGb()}
      />
      <JapesCheck
        id={1033}
        name="Japes Tiny Beehive"
        region="Hive Tunnel Area"
        canGetLogic={hiveGb.in}
        canGetBreak={hiveGb.out}
      />
    </>
  )
}

export default TinyBananas
