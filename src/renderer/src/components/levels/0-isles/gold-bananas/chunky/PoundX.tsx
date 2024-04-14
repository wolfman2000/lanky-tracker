import { useCheckChunkyPound } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const PoundX: React.FC = () => {
  const pound = useCheckChunkyPound()
  return (
    <IslesCheck id={42} name="Isles Chunky Pound the X" region="Outer Isles" canGetLogic={pound} />
  )
}

export default PoundX
