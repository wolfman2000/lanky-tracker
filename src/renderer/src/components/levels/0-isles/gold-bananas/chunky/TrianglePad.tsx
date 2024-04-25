import { useCheckChunkyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const TrianglePad: React.FC = () => {
  const music = useCheckChunkyMusicPad()
  return (
    <IslesCheck id={41} name="Isles Chunky Triangle Pad" region="Main Isle" canGetLogic={music} />
  )
}

export default TrianglePad
