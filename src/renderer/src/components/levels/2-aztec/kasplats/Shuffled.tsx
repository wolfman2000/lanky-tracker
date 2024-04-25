import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/aztec'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()

  return (
    <KasplatPool>
      <AztecCheck
        id={2250}
        name="Aztec Kasplat Location #1"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2251}
        name="Aztec Kasplat Location #2"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2252}
        name="Aztec Kasplat Location #3"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2253}
        name="Aztec Kasplat Location #4"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2254}
        name="Aztec Kasplat Location #5"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
