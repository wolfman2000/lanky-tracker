import CratePool from '@renderer/components/pools/Crates'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => null

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()

  return (
    <>
      <IslesCheck id={260} name="Isles Crate Location #1 (maybe)" canGetLogic={anyKong} />
      <IslesCheck id={261} name="Isles Crate Location #2 (maybe)" canGetLogic={anyKong} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
