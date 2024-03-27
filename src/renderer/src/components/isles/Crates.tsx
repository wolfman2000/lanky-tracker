import { useAnyKong } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '../pools/Crates'
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
  const shuffle = useDonkStore(useShallow((state) => state.shuffleCrates))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
