import MiscPool from '@renderer/components/pools/Misc'
import { useBean } from '@renderer/hooks/consumables'
import {
  useForestBean,
  useForestDusk,
  useForestOwl,
  useForestSpiderBoss,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import {
  useAnyGun,
  useFeather,
  useMini,
  usePineapple,
  useSax,
  useTiny
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../ForestCheck'

const TinyBananas: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const owlTree = useForestOwl()
  const beanstalk = useForestBean()
  const mini = useMini()
  const sax = useSax()
  const feather = useFeather()
  const pineapple = usePineapple()
  const tiny = useTiny()
  const anyGun = useAnyGun()
  const bean = useBean()
  const spiderBoss = useForestSpiderBoss()
  const dusk = useForestDusk()
  return (
    <>
      <ForestCheck
        id={5030}
        name="Forest Tiny Mushroom Barrel"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && tiny && canSlam}
      />
      <ForestCheck
        id={5031}
        name="Forest Tiny Anthill"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <MiscPool>
        <ForestCheck
          id={5034}
          name="Forest Tiny Bean"
          region="Owl Tree"
          canGetLogic={owlTree && mini && sax}
        />
      </MiscPool>
      <ForestCheck
        id={5032}
        name="Forest Tiny Spider Boss"
        region="Forest Mills"
        canGetLogic={spiderBoss.in && ((dusk && (feather || pineapple)) || (!dusk && feather))}
        canGetBreak={logicBreak(spiderBoss) && anyGun}
      />
      <ForestCheck
        id={5033}
        name="Forest Tiny Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && bean && mini && sax}
      />
    </>
  )
}

export default TinyBananas
