import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  if (!useShuffleCrates()) {
    return null
  }
  return (
    <>
      <IslesCheck id={260} name="Isles Crate Location #1 (maybe)" canGetLogic={anyKong} />
      <IslesCheck id={261} name="Isles Crate Location #2 (maybe)" canGetLogic={anyKong} />
    </>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
