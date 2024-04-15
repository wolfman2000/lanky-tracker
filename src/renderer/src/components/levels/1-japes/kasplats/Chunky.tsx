import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useChunkyUndergroundGb } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const ChunkyKasplat: React.FC = () => {
  const under = useChunkyUndergroundGb()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <JapesCheck
          id={1054}
          name="Japes Kasplat: Underground"
          region="Japes Caves And Mines"
          canGetLogic={under.in}
          canGetBreak={under.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default ChunkyKasplat
