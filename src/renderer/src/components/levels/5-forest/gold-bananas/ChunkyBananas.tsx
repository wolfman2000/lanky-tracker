import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useChunkyAppleGb,
  useChunkyFaceGb,
  useChunkyMillGb,
  useChunkyMineGb
} from '@renderer/hooks/forest'
import ForestCheck from '../ForestCheck'

const ChunkyBananas: React.FC = () => {
  const millGb = useChunkyMillGb()
  return (
    <>
      <ToughGoldenBanana>
        <ForestCheck
          id={5040}
          name="Forest Chunky Minecarts"
          region="Forest Center And Beanstalk"
          canGetLogic={useChunkyMineGb()}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5041}
        name="Forest Chunky Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={useChunkyFaceGb()}
      />
      <ForestCheck
        id={5042}
        name="Forest Chunky Kegs"
        region="Forest Mills"
        canGetLogic={millGb.in}
        canGetBreak={millGb.out}
      />
      <ForestCheck
        id={5043}
        name="Forest Chunky Apple"
        region="Forest Center And Beanstalk"
        canGetLogic={useChunkyAppleGb()}
      />
    </>
  )
}

export default ChunkyBananas
