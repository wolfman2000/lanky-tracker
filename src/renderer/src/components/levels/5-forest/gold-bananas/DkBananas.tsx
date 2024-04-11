import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkBarnGb, useDkBlastGb, useDkMillGb, useDkMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../ForestCheck'

const DkBananas: React.FC = () => {
  const millGb = useDkMillGb()
  const barnGb = useDkBarnGb()
  return (
    <>
      <ToughGoldenBanana>
        <ForestCheck
          id={5001}
          name="Forest DK Baboon Blast"
          region="Giant Mushroom Exterior"
          canGetLogic={useDkBlastGb()}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5002}
        name="Forest DK Mushroom Cannons"
        region="Giant Mushroom Insides"
        canGetLogic={useDkMushGb()}
      />
      <ForestCheck
        id={5003}
        name="Forest DK Mill"
        region="Forest Mills"
        canGetLogic={millGb.in}
        canGetBreak={millGb.out}
      />
      <ForestCheck
        id={5004}
        name="Forest DK Barn"
        region="Forest Mills"
        canGetLogic={barnGb.in}
        canGetBreak={barnGb.out}
      />
    </>
  )
}

export default DkBananas
