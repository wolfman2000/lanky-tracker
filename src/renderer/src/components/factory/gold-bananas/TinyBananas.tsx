import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory,
  useSlamFactory
} from '@renderer/hooks/factory'
import { useDk, useFeather, useMini, useTwirl } from '@renderer/hooks/kongs'
import FactoryCheck from '../FactoryCheck'

const TinyBananas: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const mini = useMini()
  const feather = useFeather()
  const twirl = useTwirl()
  const dk = useDk()
  return (
    <>
      <FactoryCheck
        id={3030}
        name="Factory Tiny Dartboard"
        region="Testing Area"
        canGetLogic={testing && mini && feather && canSlam}
      />
      <FactoryCheck
        id={3031}
        name="Factory Tiny Car Race"
        region="R&D Area"
        canGetLogic={testing && mini}
      />
      <FactoryCheck
        id={3032}
        name="Factory Tiny by Arcade"
        region="Storage And Arcade"
        canGetLogic={inStage && mini}
      />
      <FactoryCheck
        id={3033}
        name="Factory Tiny Production Room"
        region="Production Room"
        canGetLogic={production && canSlam && twirl}
        canGetBreak={production && (twirl || dk)}
      />
    </>
  )
}

export default TinyBananas
