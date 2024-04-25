import { useShuffleDirt } from '@renderer/hooks/settings'

const VanillaDirt: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleDirt() ? null : <>{children}</>

export default VanillaDirt
