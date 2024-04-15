import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import KasplatPool from '@renderer/components/pools/Kasplats'

export const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  if (!useShuffleKasplats()) {
    return null
  }
  return (
    <KasplatPool>
      <IslesCheck id={250} name="Isles Kasplat Location #1" canGetLogic={anyKong} />
      <IslesCheck id={251} name="Isles Kasplat Location #2" canGetLogic={anyKong} />
      <IslesCheck id={252} name="Isles Kasplat Location #3" canGetLogic={anyKong} />
      <IslesCheck id={253} name="Isles Kasplat Location #4" canGetLogic={anyKong} />
      <IslesCheck id={254} name="Isles Kasplat Location #5" canGetLogic={anyKong} />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
