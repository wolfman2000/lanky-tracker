import { useCheckTinyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SaxPad: React.FC = () => {
  const pad = useCheckTinyMusicPad()
  return <IslesCheck id={31} name="Isles Tiny Saxophone Pad" region="Krem Isle" canGetLogic={pad} />
}

export default SaxPad
