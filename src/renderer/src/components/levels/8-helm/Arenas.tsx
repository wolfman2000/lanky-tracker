import ArenaPool from '@renderer/components/pools/Arenas'
import { useHelmEnter, useHelmMachine } from '@renderer/hooks/helm'
import { useAnyKong, useRocket } from '@renderer/hooks/kongs'
import { useShuffledArenas } from '@renderer/hooks/settings'
import HelmCheck from './HelmCheck'

const Vanilla: React.FC = () => {
  const helmMachine = useHelmMachine()
  const rocket = useRocket()
  return <HelmCheck id={8090} name="Helm Arena" canGetLogic={helmMachine && rocket} />
}

const Shuffled: React.FC = () => {
  const inStage = useHelmEnter()
  const anyKong = useAnyKong()
  return (
    <>
      <HelmCheck id={8190} name="Helm Arena" canGetLogic={inStage && anyKong} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
