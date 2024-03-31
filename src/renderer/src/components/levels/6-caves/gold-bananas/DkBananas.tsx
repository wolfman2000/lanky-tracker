import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useCavesDkCabinBee, useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useBlast, useBongos, useSlam, useStrong } from '@renderer/hooks/kongs'
import CavesCheck from '../CavesCheck'

const DkBananas: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const blast = useBlast()
  const bongos = useBongos()
  const strong = useStrong()
  const slam = useSlam()
  const dkCabin = useCavesDkCabinBee()
  return (
    <>
      <ToughGoldenBanana>
        <CavesCheck
          id={6001}
          name="Caves DK Baboon Blast"
          region="Main Caves Area"
          canGetLogic={inStage && blast}
        />
      </ToughGoldenBanana>
      <CavesCheck
        id={6002}
        name="Caves DK 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && bongos && strong}
        canGetBreak={igloo && bongos}
      />
      <CavesCheck
        id={6003}
        name="Caves DK Rotating Cabin"
        region="Cabins Area"
        canGetLogic={inStage && bongos && slam}
      />
      <CavesCheck
        id={6004}
        name="Caves DK 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={dkCabin.in}
        canGetBreak={dkCabin.out}
      />
    </>
  )
}

export default DkBananas
