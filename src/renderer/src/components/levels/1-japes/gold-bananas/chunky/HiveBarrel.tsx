import { useChunkyHiveGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveBarrel: React.FC = () => {
  const chunkyHiveGb = useChunkyHiveGb()
  return (
    <JapesCheck
      id={1042}
      name="Japes Chunky Giant Bonus Barrel"
      region="Hive Tunnel Area"
      canGetLogic={chunkyHiveGb}
    />
  )
}

export default HiveBarrel
