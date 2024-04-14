import {
  useLanky5DoorGb,
  useLankyMatchGb,
  useLankySnakeGb,
  useLankyVultureGb
} from '@renderer/hooks/aztec'
import AztecCheck from '../AztecCheck'

const LankyBananas: React.FC = () => {
  const vultureGb = useLankyVultureGb()
  const doorGb = useLanky5DoorGb()
  const snakeGb = useLankySnakeGb()
  const matchGb = useLankyMatchGb()
  return (
    <>
      <AztecCheck
        id={2020}
        name="Aztec Lanky Vulture Shooting"
        region="Tiny Temple"
        canGetLogic={vultureGb.in}
        canGetBreak={vultureGb.out}
      />
      <AztecCheck
        id={2021}
        name="Aztec Lanky 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={doorGb.in}
        canGetBreak={doorGb.out}
      />
      <AztecCheck
        id={2022}
        name="Aztec Lanky Llama Temple Barrel"
        region="Llama Temple"
        canGetLogic={snakeGb.in}
        canGetBreak={snakeGb.out}
      />
      <AztecCheck
        id={2023}
        name="Aztec Lanky Matching Game"
        region="Llama Temple"
        canGetLogic={matchGb.in}
        canGetBreak={matchGb.out}
      />
    </>
  )
}

export default LankyBananas
