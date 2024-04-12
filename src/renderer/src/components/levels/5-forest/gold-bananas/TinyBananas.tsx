import MiscPool from '@renderer/components/pools/Misc'
import { useTinyAntGb, useTinyBeanGb, useTinyMushGb, useTinySpiderGb } from '@renderer/hooks/forest'
import ForestCheck from '../ForestCheck'

const TinyBananas: React.FC = () => {
  const spiderGb = useTinySpiderGb()
  return (
    <>
      <ForestCheck
        id={5030}
        name="Forest Tiny Mushroom Barrel"
        region="Giant Mushroom Insides"
        canGetLogic={useTinyMushGb()}
      />
      <ForestCheck
        id={5031}
        name="Forest Tiny Anthill"
        region="Owl Tree"
        canGetLogic={useTinyAntGb()}
      />
      <MiscPool>
        <ForestCheck
          id={5034}
          name="Forest Tiny Bean"
          region="Owl Tree"
          canGetLogic={useTinyAntGb()}
        />
      </MiscPool>
      <ForestCheck
        id={5032}
        name="Forest Tiny Spider Boss"
        region="Forest Mills"
        canGetLogic={spiderGb.in}
        canGetBreak={spiderGb.out}
      />
      <ForestCheck
        id={5033}
        name="Forest Tiny Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={useTinyBeanGb()}
      />
    </>
  )
}

export default TinyBananas
