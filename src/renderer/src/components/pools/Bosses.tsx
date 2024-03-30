import { usePoolKeys } from '@renderer/hooks/settings'

const BossPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolKeys() ? <>{children}</> : null

export default BossPool
