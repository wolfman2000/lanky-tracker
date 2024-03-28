import useDonkStore from '@renderer/store'
import { PropsWithChildren } from 'react'
import { useShallow } from 'zustand/react/shallow'

const MiscPool: React.FC<PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolMisc))
  return pool ? <>{children}</> : null
}

export default MiscPool
