import {
  useCheckChunkyCage,
  useCheckChunkyHelm,
  useCheckChunkyMusicPad,
  useCheckChunkyPound
} from '@renderer/hooks/isles'
import IslesCheck from '../IslesCheck'

const ChunkyBananas: React.FC = () => {
  const cage = useCheckChunkyCage()
  const music = useCheckChunkyMusicPad()
  const pound = useCheckChunkyPound()
  const helm = useCheckChunkyHelm()
  return (
    <>
      <IslesCheck
        id={40}
        name="Isles Chunky Pineapple Cage"
        region="Main Isle"
        canGetLogic={cage}
      />
      <IslesCheck id={41} name="Isles Chunky Triangle Pad" region="Main Isle" canGetLogic={music} />
      <IslesCheck
        id={42}
        name="Isles Chunky Pound the X"
        region="Outer Isles"
        canGetLogic={pound}
      />
      <IslesCheck
        id={43}
        name="Isles Chunky Helm Lobby Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={helm.in}
        canGetBreak={helm.out}
      />
    </>
  )
}

export default ChunkyBananas
