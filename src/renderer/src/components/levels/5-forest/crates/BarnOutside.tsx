import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useForestDusk, useForestNight } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const BarnOutsideCrate: React.FC = () => {
  const night = useForestNight()
  const dusk = useForestDusk()
  return (
    <CratePool>
      <VanillaCrate>
        <ForestCheck
          id={5062}
          name="Forest Crate: Near Thrornvine Barn"
          region="Forest Mills"
          canGetLogic={dusk || night.in}
          canGetBreak={night.out}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default BarnOutsideCrate
