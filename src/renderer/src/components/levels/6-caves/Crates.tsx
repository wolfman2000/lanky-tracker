import CratePool from '@renderer/components/pools/Crates'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => null

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayCaves()

  return (
    <>
      <CavesCheck
        id={6260}
        name="Caves Crate Location #1 (maybe)"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6261}
        name="Caves Crate Location #2 (maybe)"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
