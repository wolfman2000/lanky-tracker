import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <KasplatPool>
      <GalleonCheck id={4250} name="Galleon Kasplat Location #1" canGetLogic={thing} />
      <GalleonCheck id={4251} name="Galleon Kasplat Location #2" canGetLogic={thing} />
      <GalleonCheck id={4252} name="Galleon Kasplat Location #3" canGetLogic={thing} />
      <GalleonCheck id={4253} name="Galleon Kasplat Location #4" canGetLogic={thing} />
      <GalleonCheck id={4254} name="Galleon Kasplat Location #5" canGetLogic={thing} />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
