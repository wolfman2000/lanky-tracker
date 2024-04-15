import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
  const kasplat = useGeneralThing()

  return (
    <KasplatPool>
      <CastleCheck id={7250} name="Castle Kasplat Location #1" canGetLogic={kasplat} />
      <CastleCheck id={7251} name="Castle Kasplat Location #2" canGetLogic={kasplat} />
      <CastleCheck id={7252} name="Castle Kasplat Location #3" canGetLogic={kasplat} />
      <CastleCheck id={7253} name="Castle Kasplat Location #4" canGetLogic={kasplat} />
      <CastleCheck id={7254} name="Castle Kasplat Location #5" canGetLogic={kasplat} />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
