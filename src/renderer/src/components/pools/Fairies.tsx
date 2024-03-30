import { usePoolFairies } from '@renderer/hooks/settings'

const FairyPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolFairies() ? <>{children}</> : null

export default FairyPool
