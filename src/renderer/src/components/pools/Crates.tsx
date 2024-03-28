import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const CratePool: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolCrates))
  return pool ? <>{children}</> : null
}

export default CratePool
