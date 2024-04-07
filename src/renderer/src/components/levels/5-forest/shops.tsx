import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useForestBean, useForestDay, usePlayForest } from '@renderer/hooks/forest'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const beanstalk = useForestBean()

  return (
    <>
      <ShopGenerator
        baseId={5110}
        baseName="Forest Cranky"
        level="Forest"
        region="Forest Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={5120}
        baseName="Forest Funky"
        level="Forest"
        region="Forest Shops"
        inLogic={beanstalk}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayForest()
  const beanstalk = useForestBean()
  const day = useForestDay()

  return (
    <>
      <ShopGenerator
        baseId={5140}
        baseName="Forest Cranky Location"
        level="Forest"
        region="Forest Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={5150}
        baseName="Forest Funky Location"
        level="Forest"
        region="Forest Shops"
        inLogic={beanstalk}
      />
      <ShopGenerator
        baseId={5170}
        baseName="Forest Snide Location"
        level="Forest"
        region="Forest Shops"
        inLogic={day.in}
        outLogic={day.out}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
