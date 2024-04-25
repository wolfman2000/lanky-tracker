import { useShuffleKasplats } from '@renderer/hooks/settings'

const VanillaKasplat: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleKasplats() ? null : <>{children}</>

export default VanillaKasplat
