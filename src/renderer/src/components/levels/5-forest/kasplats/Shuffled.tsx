import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/forest'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()

  return (
    <KasplatPool>
      <ForestCheck id={5250} name="Forest Kasplat Location #1" canGetLogic={thing} />
      <ForestCheck id={5251} name="Forest Kasplat Location #2" canGetLogic={thing} />
      <ForestCheck id={5252} name="Forest Kasplat Location #3" canGetLogic={thing} />
      <ForestCheck id={5253} name="Forest Kasplat Location #4" canGetLogic={thing} />
      <ForestCheck id={5254} name="Forest Kasplat Location #5" canGetLogic={thing} />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
