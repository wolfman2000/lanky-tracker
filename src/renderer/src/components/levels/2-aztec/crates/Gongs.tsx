import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useAztecBack } from '@renderer/hooks/aztec'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const GongCrate: React.FC = () => {
  const aztecBack = useAztecBack()
  return (
    <CratePool>
      <VanillaCrate>
        <AztecCheck
          id={2062}
          name="Aztec Crate: Near Gong Tower"
          region="Aztec Oasis And Totem Area"
          canGetLogic={aztecBack.in}
          canGetBreak={logicBreak(aztecBack)}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default GongCrate
