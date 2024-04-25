import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useAztecDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/**
 * The standard dirt location on top of the Aztec roof.
 * @returns The dirt check element if it is necessary.
 */
const AztecRoof: React.FC = () => {
  const dirt = useAztecDirt()

  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={74}
          name="Isles Dirt: Aztec Roof"
          region="Main Isle"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default AztecRoof
