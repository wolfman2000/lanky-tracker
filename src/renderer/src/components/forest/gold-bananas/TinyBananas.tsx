import { useShallow } from 'zustand/react/shallow'

import MiscPool from '@renderer/components/pools/Misc'
import {
  useForestBean,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import {
  useAnyGun,
  useFeather,
  useMini,
  usePineapple,
  usePunch,
  useSax,
  useTiny
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import ForestCheck from '../ForestCheck'

const TinyBananas: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const owlTree = useForestOwl()
  const beanstalk = useForestBean()
  const mini = useMini()
  const sax = useSax()
  const feather = useFeather()
  const punch = usePunch()
  const pineapple = usePineapple()
  const tiny = useTiny()
  const anyGun = useAnyGun()
  const [bean, forestTime] = useDonkStore(
    useShallow((state) => [state.consumables.bean, state.settings.forestTime])
  )
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
        canGetLogic={
          inStage &&
          ((forestTime == 2 && ((mini && feather) || (punch && pineapple))) ||
            (night.in && punch && mini && feather))
        }
        canGetBreak={inStage && logicBreak(night) && punch && mini && anyGun}
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
