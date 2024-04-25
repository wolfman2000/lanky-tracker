import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestBean, useForestBeanHalf, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const CenterEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const zinger = useDefeatZinger()
  const klump = useDefeatKlump()
  const beanstalk = useForestBean()
  const beanHalf = useForestBeanHalf()
  return (
    <DropPool>
      <ForestCheck
        id={5323}
        name="Forest Enemy: Near Apple Dropoff"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5324}
        name="Forest Enemy: Near DK Portal"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5325}
        name="Forest Enemy: Near Well Tag"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5312}
        name="Forest Enemy: Green Tunnel"
        region="Forest Center And Beanstalk"
        canGetLogic={beanHalf && zinger}
      />
      <ForestCheck
        id={5310}
        name="Forest Enemy: Near Beanstalk 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5311}
        name="Forest Enemy: Near Beanstalk 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
    </DropPool>
  )
}

export default CenterEnemies
