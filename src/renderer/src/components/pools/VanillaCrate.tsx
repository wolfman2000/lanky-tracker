import { useShuffleCrates } from '@renderer/hooks/settings'

const VanillaCrate: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleCrates() ? null : <>{children}</>

export default VanillaCrate
