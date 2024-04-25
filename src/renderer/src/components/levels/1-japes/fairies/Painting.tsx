import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { usePaintingFairy } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const PaintingFairy: React.FC = () => {
  const painting = usePaintingFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <JapesCheck
          id={1081}
          name="Japes Fairy (Painting Room)"
          region="Japes Caves And Mines"
          canGetLogic={painting.in}
          canGetBreak={painting.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default PaintingFairy
