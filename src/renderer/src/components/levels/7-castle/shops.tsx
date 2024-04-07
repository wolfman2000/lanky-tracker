import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()

  return (
    <>
      <ShopGenerator
        baseId={7110}
        baseName="Castle Cranky"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7120}
        baseName="Castle Funky"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7130}
        baseName="Castle Candy"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayCastle()

  return (
    <>
      <ShopGenerator
        baseId={7140}
        baseName="Castle Cranky Location"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7150}
        baseName="Castle Funky Location"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7160}
        baseName="Castle Candy Location"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7170}
        baseName="Castle Snide Location"
        level="Castle"
        region="Castle Shops"
        inLogic={inStage}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
