import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useJapesKongGates, usePlayJapes } from '@renderer/hooks/japes'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const playJapes = usePlayJapes()
  const kongGates = useJapesKongGates()

  return (
    <>
      <ShopGenerator
        baseId={1110}
        baseName="Japes Cranky"
        level="Japes"
        region="Japes Shops"
        inLogic={kongGates}
      />
      <ShopGenerator
        baseId={1120}
        baseName="Japes Funky"
        level="Japes"
        region="Japes Shops"
        inLogic={playJapes}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const playJapes = usePlayJapes()
  const kongGates = useJapesKongGates()

  return (
    <>
      <ShopGenerator
        baseId={1140}
        baseName="Japes Cranky Location"
        level="Japes"
        region="Japes Shops"
        inLogic={kongGates}
      />
      <ShopGenerator
        baseId={1150}
        baseName="Japes Funky Location"
        level="Japes"
        region="Japes Shops"
        inLogic={playJapes}
      />
      <ShopGenerator
        baseId={1170}
        baseName="Japes Snide Location"
        level="Japes"
        region="Japes Shops"
        inLogic={playJapes}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
