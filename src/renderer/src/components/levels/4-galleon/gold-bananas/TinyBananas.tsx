import MiscPool from '@renderer/components/pools/Misc'
import {
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useDive, useMini, useSax, useTiny } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonCheck from '../GalleonCheck'

const TinyBananas: React.FC = () => {
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const treasure = useGalleonTreasureRoom()
  const canSlam = useSlamGalleon()
  const tiny = useTiny()
  const mini = useMini()
  const dive = useDive()
  const sax = useSax()
  const pearls = useDonkStore(useShallow((state) => state.consumables.pearls))
  return (
    <>
      <GalleonCheck
        id={4030 /* TODO: Fast check for pearls. */}
        name="Galleon Tiny Pearls"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && mini && dive && pearls != 0}
      />
      <GalleonCheck
        id={4031}
        name="Galleon Tiny Submarine"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && mini && dive}
      />
      <GalleonCheck
        id={4032}
        name="Galleon Tiny 2 Door Ship"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && canSlam && tiny && dive}
      />
      <GalleonCheck
        id={4033}
        name="Galleon Tiny 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && sax && dive}
      />
      <MiscPool>
        <GalleonCheck
          id={4034}
          name="Galleon Tiny Treasure Chest Clams x5"
          region="Treasure Room"
          canGetLogic={treasure.in && mini}
          canGetBreak={treasure.out && mini}
        />
      </MiscPool>
    </>
  )
}
export default TinyBananas
