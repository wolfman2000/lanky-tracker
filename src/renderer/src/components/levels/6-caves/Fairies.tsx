import FairyPool from '@renderer/components/pools/Fairies'
import { useCabinFairy, useGenericFairy, useIglooFairy } from '@renderer/hooks/caves'
import { useShuffleFairies } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => {
  const cabin = useCabinFairy()
  return (
    <>
      <CavesCheck
        id={6080}
        name="Caves Fairy (Tiny Igloo)"
        region="Igloo Area"
        canGetLogic={useIglooFairy()}
      />
      <CavesCheck
        id={6081}
        name="Caves Fairy (Diddy Candles Cabin)"
        region="Cabins Area"
        canGetLogic={cabin.in}
        canGetBreak={cabin.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGenericFairy()
  return (
    <>
      <CavesCheck id={6280} name="Caves Fairy Location #1" canGetLogic={thing} />
      <CavesCheck id={6281} name="Caves Fairy Location #2" canGetLogic={thing} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
