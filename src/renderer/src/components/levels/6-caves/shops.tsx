import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCaves } from '@renderer/hooks/caves'
import { usePunch } from '@renderer/hooks/kongs'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const inStage = usePlayCaves()

  return (
    <>
      <ShopGenerator
        baseId={6110}
        baseName="Caves Cranky"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={6120}
        baseName="Caves Funky"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={6130}
        baseName="Caves Candy"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayCaves()
  const punch = usePunch()

  return (
    <>
      <ShopGenerator
        baseId={6140}
        baseName="Caves Cranky Location"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={6150}
        baseName="Caves Funky Location"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={6160}
        baseName="Caves Candy Location"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={6170}
        baseName="Caves Snide Location"
        level="Caves"
        region="Caves Shops"
        inLogic={inStage && punch}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
