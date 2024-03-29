import useDonkStore from '@renderer/store'
import { PropsWithChildren } from 'react'
import { useShallow } from 'zustand/react/shallow'

const KasplatPool: React.FC<PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolBlueprints))
  return pool ? <>{children}</> : null
}

export default KasplatPool
