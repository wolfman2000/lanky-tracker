import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useLlamaCrate } from '@renderer/hooks/aztec'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const LlamaInsideCrate: React.FC = () => {
  const llama = useLlamaCrate()
  return (
    <CratePool>
      <VanillaCrate>
        <AztecCheck
          id={2060}
          name="Aztec Crate: Llama Temple Entrance"
          region="Llama Temple"
          canGetLogic={llama.in}
          canGetBreak={logicBreak(llama)}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default LlamaInsideCrate
