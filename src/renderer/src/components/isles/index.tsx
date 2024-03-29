import { useShallow } from 'zustand/react/shallow'

import { usePlayForest } from '@renderer/hooks/forest'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useAllGun, useAnyKong, useBoulderTech, useGone } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import ArenaPool from '../pools/Arenas'
import CompanyPool from '../pools/Company'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import FairyLocations from './Fairies'
import IslesCheck from './IslesCheck'
import KasplatLocations from './Kasplats'
import ChunkyBananas from './gold-bananas/ChunkyBananas'
import DiddyBananas from './gold-bananas/DiddyBananas'
import DkBananas from './gold-bananas/DkBananas'
import LankyBananas from './gold-bananas/LankyBananas'
import TinyBananas from './gold-bananas/TinyBananas'
import IslesShops from './shops'

const IsleChecks: React.FC = () => {
  const [medals, jetpacCount] = useDonkStore(
    useShallow((state) => [state.consumables.bananaMedals, state.settings.jetpacCount])
  )
  const playForest = usePlayForest()
  const anyKong = useAnyKong()
  const allGun = useAllGun()
  const islesKremAscent = useIslesKremAscent()
  const gone = useGone()
  const boulderTech = useBoulderTech()
  return (
    <div className="grid">
      <DkBananas />
      <DiddyBananas />
      <LankyBananas />
      <TinyBananas />
      <ChunkyBananas />
      <KasplatLocations />
      <CrateLocations />
      <DirtLocations />
      <FairyLocations />
      <ArenaPool>
        <IslesCheck
          id={90}
          name="Isles Snide Arena"
          region="Krem Isle"
          canGetLogic={islesKremAscent && boulderTech}
        />
        <IslesCheck
          id={91}
          name="Isles Forest Arena"
          region="Outer Isles"
          canGetLogic={playForest && allGun && gone}
        />
      </ArenaPool>
      <CompanyPool>
        <IslesCheck
          id={105}
          name="Cranky Jetpac Game"
          canGetLogic={anyKong && medals >= jetpacCount}
        />
      </CompanyPool>
      <IslesShops />
    </div>
  )
}

export default IsleChecks
