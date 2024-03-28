import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const RainbowCoinPool: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pool = useDonkStore(useShallow((state) => state.poolRainbowCoins))
  return pool ? <>{children}</> : null
}

export default RainbowCoinPool
