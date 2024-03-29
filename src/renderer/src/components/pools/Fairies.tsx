import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const FairyPool: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolFairies))
  return pool ? <>{children}</> : null
}

export default FairyPool
