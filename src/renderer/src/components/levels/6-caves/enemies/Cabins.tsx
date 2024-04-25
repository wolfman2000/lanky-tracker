import DropPool from '@renderer/components/pools/Drops'
import { useCavesLankyCabin, usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const CabinsEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const lankyCabin = useCavesLankyCabin()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CavesCheck
        id={6302}
        name="Caves Enemy: Outside 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && zinger}
      />
      <CavesCheck
        id={6303}
        name="Caves Enemy: Waterfall Lanky Cabin"
        region="Cabins Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6307}
        name="Caves Enemy: Lanky Cabin Headphones"
        region="Cabins Area"
        canGetLogic={inStage && anyKong && kosha}
      />

      <CavesCheck
        id={6317}
        name="Caves Enemy: Lanky Cabin Inside Near"
        region="Cabins Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />
      <CavesCheck
        id={6318}
        name="Caves Enemy: Lanky Cabin Inside Far"
        region="Cabins Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />
    </DropPool>
  )
}

export default CabinsEnemies
