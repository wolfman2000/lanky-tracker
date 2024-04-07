import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  return (
    <ShopGenerator
      baseId={110}
      baseName="Isles Cranky"
      level="Isles"
      region="Isles Shops"
      inLogic={true}
    />
  )
}

const Shuffled: React.FC = () => {
  const kremAscent = useIslesKremAscent()

  return (
    <>
      <ShopGenerator
        baseId={140}
        baseName="Isles Cranky Location"
        level="Isles"
        region="Isles Shops"
        inLogic={true}
      />
      <ShopGenerator
        baseId={170}
        baseName="Isles Snide Location"
        level="Isles"
        region="Isles Shops"
        inLogic={kremAscent}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
