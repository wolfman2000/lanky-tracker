import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecFront,
  useAztecTinyTemple
} from '@renderer/hooks/aztec'
import { useBoulderTech, useHunky, usePineapple, useTriangle } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../AztecCheck'

const ChunkyBananas: React.FC = () => {
  const aztecFront = useAztecFront()
  const templeTiny = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const aztec5Door = useAztec5DoorTemple()
  const boulderTech = useBoulderTech()
  const pineapple = usePineapple()
  const triangle = useTriangle()
  const hunky = useHunky()
  return (
    <>
      <AztecCheck
        id={2040}
        name="Aztec Chunky Vases"
        region="Various Aztec Tunnels"
        canGetLogic={aztecFront.in && boulderTech && pineapple}
        canGetBreak={logicBreak(aztecFront) && boulderTech && pineapple}
      />
      <AztecCheck
        id={2041}
        name="Aztec Chunky Klaptrap Room"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && triangle}
        canGetBreak={logicBreak(templeTiny) && triangle}
      />
      <AztecCheck
        id={2042}
        name="Aztec Chunky Caged Barrel"
        region="Various Aztec Tunnels"
        canGetLogic={aztecBack.in && boulderTech && hunky}
        canGetBreak={logicBreak(aztecBack) && boulderTech && hunky}
      />
      <AztecCheck
        id={2043}
        name="Aztec Chunky 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && pineapple}
        canGetBreak={logicBreak(aztec5Door) && pineapple}
      />
    </>
  )
}

export default ChunkyBananas
