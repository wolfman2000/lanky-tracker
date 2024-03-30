import CratePool from '@renderer/components/pools/Crates'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()
  const anyKong = useAnyKong()
  return (
    <>
      <CastleCheck
        id={7060}
        name="Castle Crate Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayCastle()

  return (
    <>
      <CastleCheck
        id={7260}
        name="Castle Crate Location #1 (maybe)"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7261}
        name="Castle Crate Location #2 (maybe)"
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
