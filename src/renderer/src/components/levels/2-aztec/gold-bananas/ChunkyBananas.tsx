import {
  useChunky5DoorGb,
  useChunkyHunkyGb,
  useChunkyKlaptrapGb,
  useChunkyVaseGb
} from '@renderer/hooks/aztec'
import AztecCheck from '../AztecCheck'

const ChunkyBananas: React.FC = () => {
  const vaseGb = useChunkyVaseGb()
  const klaptrapGb = useChunkyKlaptrapGb()
  const hunkyGb = useChunkyHunkyGb()
  const doorGb = useChunky5DoorGb()
  return (
    <>
      <AztecCheck
        id={2040}
        name="Aztec Chunky Vases"
        region="Various Aztec Tunnels"
        canGetLogic={vaseGb.in}
        canGetBreak={vaseGb.out}
      />
      <AztecCheck
        id={2041}
        name="Aztec Chunky Klaptrap Room"
        region="Tiny Temple"
        canGetLogic={klaptrapGb.in}
        canGetBreak={klaptrapGb.out}
      />
      <AztecCheck
        id={2042}
        name="Aztec Chunky Hunky Chunky Barrel"
        region="Various Aztec Tunnels"
        canGetLogic={hunkyGb.in}
        canGetBreak={hunkyGb.out}
      />
      <AztecCheck
        id={2043}
        name="Aztec Chunky 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={doorGb.in}
        canGetBreak={doorGb.out}
      />
    </>
  )
}

export default ChunkyBananas
