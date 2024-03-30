import { usePoolCrowns } from '@renderer/hooks/settings'

const ArenaPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolCrowns() ? <>{children}</> : null

export default ArenaPool
