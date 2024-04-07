import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()

  return (
    <>
      <ShopGenerator
        baseId={3110}
        baseName="Factory Cranky"
        level="Factory"
        region="Factory Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={3120}
        baseName="Factory Funky"
        level="Factory"
        region="Factory Shops"
        inLogic={testing}
      />
      <ShopGenerator
        baseId={3130}
        baseName="Factory Candy"
        level="Factory"
        region="Factory Shops"
        inLogic={inStage}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()

  return (
    <>
      <ShopGenerator
        baseId={3140}
        baseName="Factory Cranky Location"
        level="Factory"
        region="Factory Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={3150}
        baseName="Factory Funky Location"
        level="Factory"
        region="Factory Shops"
        inLogic={testing}
      />
      <ShopGenerator
        baseId={3160}
        baseName="Factory Candy Location"
        level="Factory"
        region="Factory Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={3170}
        baseName="Factory Snide Location"
        level="Factory"
        region="Factory Shops"
        inLogic={testing}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
