import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const ArenaPool: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolCrowns))
  return pool ? <>{children}</> : null
}

export default ArenaPool
