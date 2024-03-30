import { usePoolRainbowCoins } from '@renderer/hooks/settings'

const RainbowCoinPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolRainbowCoins() ? <>{children}</> : null

export default RainbowCoinPool
