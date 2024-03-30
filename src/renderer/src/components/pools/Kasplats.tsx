import { usePoolBlueprints } from '@renderer/hooks/settings'

const KasplatPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBlueprints() ? <>{children}</> : null

export default KasplatPool
