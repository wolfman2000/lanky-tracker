import { useShallow } from 'zustand/react/shallow'

import KasplatPool from '@renderer/components/pools/Kasplats'
import { useCavesMiniFunky, useCavesPillar, usePlayCaves } from '@renderer/hooks/caves'
import { useAnyKong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayCaves()
  const pillar = useCavesPillar()
  const anyKong = useAnyKong()
  const miniFunky = useCavesMiniFunky()
  return (
    <>
      <CavesCheck
        id={6050}
        name="Caves Kasplat Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6051}
        name="Caves Kasplat Mini Room by Funky"
        region="Main Caves Area"
        canGetLogic={miniFunky.in}
        canGetBreak={logicBreak(miniFunky)}
      />
      <CavesCheck
        id={6052}
        name="Caves Kasplat On the Pillar"
        region="Main Caves Area"
        canGetLogic={pillar.in}
        canGetBreak={pillar.out}
      />
      <CavesCheck
        id={6053}
        name="Caves Kasplat Cabins"
        region="Cabins Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6054}
        name="Caves Kasplat Igloo"
        region="Igloo Area"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayCaves()

  return (
    <>
      <CavesCheck id={6250} name="Caves Kasplat Location #1" canGetLogic={inStage && anyKong} />
      <CavesCheck id={6251} name="Caves Kasplat Location #2" canGetLogic={inStage && anyKong} />
      <CavesCheck id={6252} name="Caves Kasplat Location #3" canGetLogic={inStage && anyKong} />
      <CavesCheck id={6253} name="Caves Kasplat Location #4" canGetLogic={inStage && anyKong} />
      <CavesCheck id={6254} name="Caves Kasplat Location #5" canGetLogic={inStage && anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleKasplats))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
