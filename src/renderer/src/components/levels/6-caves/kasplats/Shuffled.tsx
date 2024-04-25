import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()

  return (
    <KasplatPool>
      <CavesCheck id={6250} name="Caves Kasplat Location #1" canGetLogic={thing} />
      <CavesCheck id={6251} name="Caves Kasplat Location #2" canGetLogic={thing} />
      <CavesCheck id={6252} name="Caves Kasplat Location #3" canGetLogic={thing} />
      <CavesCheck id={6253} name="Caves Kasplat Location #4" canGetLogic={thing} />
      <CavesCheck id={6254} name="Caves Kasplat Location #5" canGetLogic={thing} />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
