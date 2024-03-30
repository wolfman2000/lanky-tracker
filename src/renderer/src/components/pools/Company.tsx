import { usePoolCompanyCoins } from '@renderer/hooks/settings'

const CompanyPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolCompanyCoins() ? <>{children}</> : null

export default CompanyPool
