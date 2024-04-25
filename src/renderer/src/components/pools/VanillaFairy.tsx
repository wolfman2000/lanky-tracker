import { useShuffleFairies } from '@renderer/hooks/settings'

const VanillaFairy: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleFairies() ? null : <>{children}</>

export default VanillaFairy