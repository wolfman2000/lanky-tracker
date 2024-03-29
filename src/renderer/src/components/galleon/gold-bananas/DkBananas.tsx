import { useShallow } from 'zustand/react/shallow'

import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useBlast, useBongos, useDive, useDk, useGrab } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import GalleonCheck from '../GalleonCheck'

const DkBananas: React.FC = () => {
  const canSlam = useSlamGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const dk = useDk()
  const bongos = useBongos()
  const blast = useBlast()
  const grab = useGrab()
  const dive = useDive()
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  return (
    <>
      <GalleonCheck
        id={4001}
        name="Galleon DK Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && highTide && canSlam && dk && (seasick || grab)}
        canGetBreak={lighthouseArea && canSlam && dk && (seasick || grab)}
      />
      <GalleonCheck
        id={4002}
        name="Galleon DK Free the Seal"
        region="Shipyard Outskirts"
        canGetLogic={lighthouseArea && highTide && blast && outskirts}
        canGetBreak={lighthouseArea && blast && outskirts}
      />
      <ToughGoldenBanana>
        <GalleonCheck
          id={4003}
          name="Galleon DK Seal Race"
          region="Shipyard Outskirts"
          canGetLogic={lighthouseArea && highTide && dk && blast && outskirts}
          canGetBreak={lighthouseArea && dk && blast && outskirts}
        />
      </ToughGoldenBanana>
      <GalleonCheck
        id={4004}
        name="Galleon DK 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && dk && bongos && dive}
      />
    </>
  )
}

export default DkBananas
