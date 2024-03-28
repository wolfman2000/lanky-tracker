import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const BossPool: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolKeys))
  return pool ? <>{children}</> : null
}

export default BossPool
