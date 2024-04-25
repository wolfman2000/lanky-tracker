import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useChunky5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const ChunkyKasplat: React.FC = () => {
  const chunky = useChunky5DoorGb()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2054}
          name="Aztec Kasplat: Chunky 5-Door Temple"
          region="5 Door Temple"
          canGetLogic={chunky.in}
          canGetBreak={chunky.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default ChunkyKasplat
