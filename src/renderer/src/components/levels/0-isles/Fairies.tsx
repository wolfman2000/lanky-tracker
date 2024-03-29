import { useShallow } from 'zustand/react/shallow'

import FairyPool from '@renderer/components/pools/Fairies'
import { usePlayFactory } from '@renderer/hooks/factory'
import { usePlayForest } from '@renderer/hooks/forest'
import { useIslesFairySwitch, useIslesKremTop } from '@renderer/hooks/isles'
import { useAnyKong, useCamera, usePunch } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => {
  const camera = useCamera()
  const anyKong = useAnyKong()
  const punch = usePunch()
  const playFactory = usePlayFactory()
  const playForest = usePlayForest()
  const islesKremTop = useIslesKremTop()
  const islesFairySwitch = useIslesFairySwitch()
  return (
    <>
      <IslesCheck
        id={80}
        name="Isles Outer Fairy"
        region="Outer Isles"
        canGetLogic={anyKong && camera}
      />
      <IslesCheck
        id={81}
        name="Isles Factory Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={playFactory && punch && camera}
      />
      <IslesCheck
        id={82}
        name="Isles Forest Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={playForest && islesFairySwitch && camera}
      />
      <IslesCheck
        id={83}
        name="Isles Krem Fairy"
        region="Krem Isle"
        canGetLogic={islesKremTop && camera}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const camera = useCamera()

  return (
    <>
      <IslesCheck id={280} name="Isles Fairy Location #1" canGetLogic={anyKong && camera} />
      <IslesCheck id={281} name="Isles Fairy Location #2" canGetLogic={anyKong && camera} />
      <IslesCheck id={282} name="Isles Fairy Location #3" canGetLogic={anyKong && camera} />
      <IslesCheck id={283} name="Isles Fairy Location #4" canGetLogic={anyKong && camera} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleFairies))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
