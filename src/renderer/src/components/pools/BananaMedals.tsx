import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const BananaMedalPool: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolBananaMedals))
  return pool ? <>{children}</> : null
}

export default BananaMedalPool
