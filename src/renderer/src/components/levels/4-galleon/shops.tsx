import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()

  return (
    <>
      <ShopGenerator
        baseId={4110}
        baseName="Galleon Cranky"
        level="Galleon"
        region="Galleon Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={4120}
        baseName="Galleon Funky"
        level="Galleon"
        region="Galleon Shops"
        inLogic={outskirts}
      />
      <ShopGenerator
        baseId={4130}
        baseName="Galleon Candy"
        level="Galleon"
        region="Galleon Shops"
        inLogic={outskirts}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()

  return (
    <>
      <ShopGenerator
        baseId={4140}
        baseName="Galleon Cranky Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={4150}
        baseName="Galleon Funky Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={outskirts}
      />
      <ShopGenerator
        baseId={4160}
        baseName="Galleon Candy Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={outskirts}
      />
      <ShopGenerator
        baseId={4170}
        baseName="Galleon Snide Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={lighthouseArea && highTide}
        outLogic={lighthouseArea}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
