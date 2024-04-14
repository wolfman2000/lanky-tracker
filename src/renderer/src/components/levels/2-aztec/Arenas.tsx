import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useLankyVultureGb } from '@renderer/hooks/aztec'
import { useShuffledArenas } from '@renderer/hooks/settings'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const vulture = useLankyVultureGb()
  return (
    <AztecCheck
      id={2090}
      name="Aztec Arena (Tiny Temple: Vulture Room)"
      region="Tiny Temple"
      canGetLogic={vulture.in}
      canGetBreak={vulture.out}
    />
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <AztecCheck id={2190} name="Aztec Arena" canGetLogic={thing.in} canGetBreak={thing.out} />
    </>
  )
}

const ArenaLocations: React.FC = () => {
  const locations = useShuffledArenas() ? <Shuffled /> : <Vanilla />
  return <ArenaPool>{locations}</ArenaPool>
}

export default ArenaLocations
