import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useAztecBack,
  useAztecLlamaLava,
  useChunky5DoorGb,
  useCoconutKasplat,
  useGeneralThing,
  useOasisKasplat
} from '@renderer/hooks/aztec'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const aztecBack = useAztecBack()
  const lava = useAztecLlamaLava()
  const coconut = useCoconutKasplat()
  const chunky = useChunky5DoorGb()
  const oasis = useOasisKasplat()
  return (
    <>
      <AztecCheck
        id={2050}
        name="Aztec Kasplat: Behind DK Stone Door"
        region="Various Aztec Tunnels"
        canGetLogic={coconut.in}
        canGetBreak={coconut.out}
      />
      <AztecCheck
        id={2051}
        name="Aztec Kasplat: On Tiny Temple"
        region="Aztec Oasis And Totem Area"
        canGetLogic={oasis.in}
        canGetBreak={oasis.out}
      />
      <AztecCheck
        id={2052}
        name="Aztec Kasplat: Llama Temple Lava"
        region="Llama Temple"
        canGetLogic={lava.in}
        canGetBreak={logicBreak(lava)}
      />
      <AztecCheck
        id={2053}
        name="Aztec Kasplat: Hunky Chunky Barrel"
        region="Various Aztec Tunnels"
        canGetLogic={aztecBack.in}
        canGetBreak={aztecBack.out}
      />
      <AztecCheck
        id={2054}
        name="Aztec Kasplat: Chunky 5-Door Temple"
        region="5 Door Temple"
        canGetLogic={chunky.in}
        canGetBreak={chunky.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()

  return (
    <>
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
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
