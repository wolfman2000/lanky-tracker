import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/aztec'
import { useShuffledArenas } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <ArenaPool>
      <AztecCheck id={2190} name="Aztec Arena" canGetLogic={thing.in} canGetBreak={thing.out} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
