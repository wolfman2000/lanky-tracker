import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong, useDk, useStrong } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesCheck from '../japes/JapesCheck'
import CratePool from '../pools/Crates'
import ForestCheck from './ForestCheck'
import { useForestNight, useForestOwl, usePlayForest, useSlamForest } from '@renderer/hooks/forest'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  const owlTree = useForestOwl()
  const night = useForestNight()
  const dk = useDk()
  const strong = useStrong()
  const canSlam = useSlamForest()
  return (
    <>
      <ForestCheck
        id={5060}
        name="Forest Crate Rafters"
        region="Forest Mills"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5061}
        name="Forest Crate Owl Tree"
        region="Owl Tree"
        canGetLogic={owlTree && anyKong}
      />
      <ForestCheck
        id={5062}
        name="Forest Crate Barn Outside"
        region="Forest Mills"
        canGetLogic={inStage && night.in}
        canGetBreak={inStage && night.out}
      />
      <ForestCheck
        id={5063}
        name="Forest Crate Barn Inside"
        region="Forest Mills"
        canGetLogic={inStage && night.in && dk && canSlam && strong}
        canGetBreak={inStage && (night.in || night.out) && dk && canSlam}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()

  return (
    <>
      <JapesCheck
        id={1260}
        name="Japes Crate Location #1 (maybe)"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1261}
        name="Japes Crate Location #2 (maybe)"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleCrates))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
