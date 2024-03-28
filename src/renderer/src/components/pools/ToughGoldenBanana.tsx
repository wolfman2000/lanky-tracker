import useDonkStore from '@renderer/store'
import { PropsWithChildren } from 'react'
import { useShallow } from 'zustand/react/shallow'

const ToughGoldenBanana: React.FC<PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.poolToughBananas))
  return pool ? <>{children}</> : null
}

export default ToughGoldenBanana
