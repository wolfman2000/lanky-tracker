import { usePoolBananaMedals } from '@renderer/hooks/settings'

const BananaMedalPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBananaMedals() ? <>{children}</> : null

export default BananaMedalPool
