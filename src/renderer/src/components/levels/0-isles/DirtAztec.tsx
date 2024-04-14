import { useAztecDirt } from '@renderer/hooks/isles'
import IslesCheck from './IslesCheck'

/**
 * The standard dirt location on top of the Aztec roof.
 * @returns The dirt check element if it is necessary.
 */
const DirtAztec: React.FC = () => {
  const dirt = useAztecDirt()

  return (
    <IslesCheck
      id={74}
      name="Isles Dirt: Aztec Roof"
      region="Main Isle"
      canGetLogic={dirt.in}
      canGetBreak={dirt.out}
    />
  )
}

export default DirtAztec
