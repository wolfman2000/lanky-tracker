import { useShallow } from 'zustand/react/shallow'

import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import {
  useAnyGun,
  useBlast,
  useBongos,
  useCoconut,
  useHoming,
  useSlam,
  useStrong
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import CavesCheck from '../CavesCheck'

const DkBananas: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const blast = useBlast()
  const bongos = useBongos()
  const strong = useStrong()
  const coconut = useCoconut()
  const homing = useHoming()
  const anyGun = useAnyGun()
  const slam = useSlam()
  const hardShooting = useDonkStore(useShallow((state) => state.settings.hardShooting))
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
        id={6004 /* TODO: Hard shooting */}
        name="Caves DK 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && bongos && coconut && (homing || hardShooting)}
        canGetBreak={inStage && bongos && anyGun}
      />
    </>
  )
}

export default DkBananas
