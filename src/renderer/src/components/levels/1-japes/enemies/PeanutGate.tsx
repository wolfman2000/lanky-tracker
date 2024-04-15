import DropPool from '@renderer/components/pools/Drops'
import { useJapesSideArea } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const PeanutGateEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const japesSide = useJapesSideArea()
  return (
    <DropPool>
      <JapesCheck
        id={1301}
        name="Japes Enemy: Diddy Cavern"
        region="Japes Lowlands"
        canGetLogic={japesSide && anyKong}
      />
    </DropPool>
  )
}

export default PeanutGateEnemies
