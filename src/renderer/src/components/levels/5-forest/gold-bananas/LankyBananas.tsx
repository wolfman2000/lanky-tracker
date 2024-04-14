import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useLankyMillGb, useLankyMushGb, useLankyRaceGb } from '@renderer/hooks/forest'
import ForestCheck from '../ForestCheck'

const LankyBananas: React.FC = () => {
  const millGb = useLankyMillGb()
  const mushGb = useLankyMushGb()
  const raceGb = useLankyRaceGb()
  return (
    <>
      <ForestCheck
        id={5020}
        name="Forest Lanky Attic Shooting"
        region="Forest Mills"
        canGetLogic={millGb.in}
        canGetBreak={millGb.out}
      />
      <ForestCheck
        id={5021}
        name="Forest Lanky Colored Mushroom Slam"
        region="Giant Mushroom Insides"
        canGetLogic={mushGb.in}
        canGetBreak={mushGb.out}
      />
      <ToughGoldenBanana>
        <ForestCheck
          id={5022}
          name="Forest Lanky Rabbit Race"
          region="Owl Tree"
          canGetLogic={raceGb.in}
          canGetBreak={raceGb.out}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5023}
        name="Forest Lanky Zinger Bounce"
        region="Giant Mushroom Insides"
        canGetLogic={mushGb.in}
        canGetBreak={mushGb.out}
      />
    </>
  )
}

export default LankyBananas
