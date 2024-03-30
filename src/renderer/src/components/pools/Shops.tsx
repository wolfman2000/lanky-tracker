import { usePoolShops } from '@renderer/hooks/settings'

const ShopPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolShops() ? <>{children}</> : null

export default ShopPool
