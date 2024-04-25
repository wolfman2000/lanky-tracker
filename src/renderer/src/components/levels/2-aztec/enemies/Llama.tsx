import DropPool from '@renderer/components/pools/Drops'
import { useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useDefeatPurpleKlaptrap } from '@renderer/hooks/enemies'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const LlamaTempleEnemies: React.FC = () => {
  const llama = useAztecLlamaTemple()
  const klaptrap = useDefeatPurpleKlaptrap()
  return (
    <DropPool>
      <AztecCheck
        id={2351}
        name="Aztec Enemy: Llama Kong Free Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2352}
        name="Aztec Enemy: Llama Dino Music"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      {/* Matching enemies used to be here.*/}
      <AztecCheck
        id={2355}
        name="Aztec Enemy: Llama Right"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2356}
        name="Aztec Enemy: Llama Left"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2357}
        name="Aztec Enemy: Llama Melon Crate"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
      <AztecCheck
        id={2358}
        name="Aztec Enemy: Llama Slam Switch"
        region="Llama Temple"
        canGetLogic={llama.in && klaptrap}
        canGetBreak={logicBreak(llama) && klaptrap}
      />
    </DropPool>
  )
}

export default LlamaTempleEnemies
