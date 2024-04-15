import { useGeneralThing } from '@renderer/hooks/factory'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import KasplatPool from '@renderer/components/pools/Kasplats'

const Shuffled: React.FC = () => {
  const kasplat = useGeneralThing()
  return (
    <KasplatPool>
      <FactoryCheck id={3250} name="Factory Kasplat Location #1" canGetLogic={kasplat} />
      <FactoryCheck id={3251} name="Factory Kasplat Location #2" canGetLogic={kasplat} />
      <FactoryCheck id={3252} name="Factory Kasplat Location #3" canGetLogic={kasplat} />
      <FactoryCheck id={3253} name="Factory Kasplat Location #4" canGetLogic={kasplat} />
      <FactoryCheck id={3254} name="Factory Kasplat Location #5" canGetLogic={kasplat} />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
