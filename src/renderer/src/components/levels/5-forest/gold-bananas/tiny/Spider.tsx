import { useTinySpiderGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const SpiderBoss: React.FC = () => {
  const spiderGb = useTinySpiderGb()
  return (
    <ForestCheck
      id={5032}
      name="Forest Tiny Spider Boss"
      region="Forest Mills"
      canGetLogic={spiderGb.in}
      canGetBreak={spiderGb.out}
    />
  )
}

export default SpiderBoss
