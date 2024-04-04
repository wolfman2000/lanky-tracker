import ArenaPool from '@renderer/components/pools/Arenas'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, useGrab } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  const inStage = useFactoryTesting()
  const grab = useGrab()
  return (
    <FactoryCheck id={3090} name="Factory Arena" region="R&D Area" canGetLogic={inStage && grab} />
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  return (
    <>
      <FactoryCheck id={3190} name="Factory Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
