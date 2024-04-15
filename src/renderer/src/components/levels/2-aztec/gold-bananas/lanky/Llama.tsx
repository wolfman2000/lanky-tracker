import { useLankySnakeGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const LlamaBarrel: React.FC = () => {
  const snakeGb = useLankySnakeGb()
  return (
    <AztecCheck
      id={2022}
      name="Aztec Lanky Llama Temple Barrel"
      region="Llama Temple"
      canGetLogic={snakeGb.in}
      canGetBreak={snakeGb.out}
    />
  )
}

export default LlamaBarrel
