import { useCastleTree, usePlayCastle } from '@renderer/hooks/castle'
import { useAnyKong, useCoconut } from '@renderer/hooks/kongs'
import CastleCheck from './CastleCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KasplatPool from '../pools/Kasplats'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()
  const tree = useCastleTree()
  const coconut = useCoconut()
  const anyKong = useAnyKong()
  return (
    <>
      <CastleCheck
        id={7050}
        name="Castle Kasplat Inside the Tree"
        region="Castle Surroundings"
        canGetLogic={tree && coconut}
      />
      <CastleCheck
        id={7051}
        name="Castle Kasplat Lower Cave Center"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7052}
        name="Castle Kasplat Near Upper Warp 2"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7053}
        name="Castle Kasplat On a Lone Platform"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7054}
        name="Castle Kasplat Near Candy's"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayCastle()

  return (
    <>
      <CastleCheck id={7250} name="Castle Kasplat Location #1" canGetLogic={inStage && anyKong} />
      <CastleCheck id={7251} name="Castle Kasplat Location #2" canGetLogic={inStage && anyKong} />
      <CastleCheck id={7252} name="Castle Kasplat Location #3" canGetLogic={inStage && anyKong} />
      <CastleCheck id={7253} name="Castle Kasplat Location #4" canGetLogic={inStage && anyKong} />
      <CastleCheck id={7254} name="Castle Kasplat Location #5" canGetLogic={inStage && anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleKasplats))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
