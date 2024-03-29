import useDonkStore from '@renderer/store'
import { PropsWithChildren } from 'react'
import { useShallow } from 'zustand/react/shallow'

const CompanyPool: React.FC<PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.settings.poolCompanyCoins))
  return pool ? <>{children}</> : null
}

export default CompanyPool
