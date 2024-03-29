import { useShallow } from 'zustand/react/shallow'

import FairyPool from '@renderer/components/pools/Fairies'
import { useGalleonOutskirts, usePlayGalleon } from '@renderer/hooks/galleon'
import { useAnyKong, useCamera, useDive, usePunch, useSax } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  const camera = useCamera()
  const punch = usePunch()
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const sax = useSax()
  const dive = useDive()
  return (
    <>
      <GalleonCheck
        id={4080}
        name="Galleon Fairy Chest"
        region="Galleon Caverns"
        canGetLogic={inStage && punch && camera}
      />
      <GalleonCheck
        id={4081}
        name="Galleon Fairy 5 Door Ship"
        region="5 Door Ship"
        canGetLogic={outskirts && sax && dive}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayGalleon()
  const camera = useCamera()

  return (
    <>
      <GalleonCheck
        id={4280}
        name="Galleon Fairy Location #1"
        canGetLogic={inStage && anyKong && camera}
      />
      <GalleonCheck
        id={4281}
        name="Galleon Fairy Location #2"
        canGetLogic={inStage && anyKong && camera}
      />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleFairies))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
