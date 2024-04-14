import { useCheckChunkyCage } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const PineappleCage: React.FC = () => {
  const cage = useCheckChunkyCage()
  return (
    <IslesCheck id={40} name="Isles Chunky Pineapple Cage" region="Main Isle" canGetLogic={cage} />
  )
}

export default PineappleCage
