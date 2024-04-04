import { usePoolDrops } from '@renderer/hooks/settings'

const DropPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolDrops() ? <>{children}</> : null

export default DropPool
