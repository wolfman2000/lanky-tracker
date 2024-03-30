import { usePoolToughBananas } from '@renderer/hooks/settings'

const ToughGoldenBanana: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolToughBananas() ? <>{children}</> : null

export default ToughGoldenBanana
