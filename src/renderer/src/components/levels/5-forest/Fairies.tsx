import FairyPool from '@renderer/components/pools/Fairies'
import { useBarnFairy, useGeneralFairy, useRaftersFairy } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  const barn = useBarnFairy()
  const rafters = useRaftersFairy()
  return (
    <>
      <ForestCheck
        id={5080}
        name="Forest Fairy Rafters"
        region="Forest Mills"
        canGetLogic={rafters.in}
        canGetBreak={rafters.out}
      />
      <ForestCheck
        id={5081}
        name="Forest Fairy Barn"
        region="Forest Mills"
        canGetLogic={barn.in}
        canGetBreak={barn.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <>
      <ForestCheck id={5280} name="Forest Fairy Location #1" canGetLogic={thing} />
      <ForestCheck id={5281} name="Forest Fairy Location #2" canGetLogic={thing} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
