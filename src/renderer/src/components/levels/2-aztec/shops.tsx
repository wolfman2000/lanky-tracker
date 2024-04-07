import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useAztecBack, useAztecFront } from '@renderer/hooks/aztec'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const aztecFront = useAztecFront()
  const aztecBack = useAztecBack()

  return (
    <>
      <ShopGenerator
        baseId={2110}
        baseName="Aztec Cranky"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecBack.in}
        outLogic={aztecBack.out}
      />
      <ShopGenerator
        baseId={2120}
        baseName="Aztec Funky"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecBack.in}
        outLogic={aztecBack.out}
      />
      <ShopGenerator
        baseId={2130}
        baseName="Aztec Candy"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecFront.in}
        outLogic={aztecFront.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const aztecFront = useAztecFront()
  const aztecBack = useAztecBack()

  return (
    <>
      <ShopGenerator
        baseId={2140}
        baseName="Aztec Cranky Location"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecBack.in}
        outLogic={aztecBack.out}
      />
      <ShopGenerator
        baseId={2150}
        baseName="Aztec Funky Location"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecBack.in}
        outLogic={aztecBack.out}
      />
      <ShopGenerator
        baseId={2160}
        baseName="Aztec Candy Location"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecFront.in}
        outLogic={aztecFront.out}
      />
      <ShopGenerator
        baseId={2170}
        baseName="Aztec Snide Location"
        level="Aztec"
        region="Aztec Shops"
        inLogic={aztecBack.in}
        outLogic={aztecBack.out}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
