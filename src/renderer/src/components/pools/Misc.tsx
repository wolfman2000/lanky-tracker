import { usePoolMisc } from '@renderer/hooks/settings'

const MiscPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolMisc() ? <>{children}</> : null

export default MiscPool
