import ArenaPool from '@renderer/components/pools/Arenas'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useAnyKong, useBongos, useSlam } from '@renderer/hooks/kongs'
import CavesCheck from './CavesCheck'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import FairyLocations from './Fairies'
import KasplatLocations from './Kasplats'
import ChunkyBananas from './gold-bananas/ChunkyBananas'
import DiddyBananas from './gold-bananas/DiddyBananas'
import DkBananas from './gold-bananas/DkBananas'
import LankyBananas from './gold-bananas/LankyBananas'
import TinyBananas from './gold-bananas/TinyBananas'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import CavesShops from './shops'

const CavesChecks: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  const slam = useSlam()
  const bongos = useBongos()

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
        <CavesCheck
          id={6090}
          name="Caves Arena"
          region="Cabins Area"
          canGetLogic={inStage && bongos && slam}
        />
      </ArenaPool>
      <BananaMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </BananaMedalPool>
      <BossPool>
        <CavesCheck
          id={6105}
          name="Caves Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong}
        />
      </BossPool>
      <ShopPool>
        <CavesShops />
      </ShopPool>
    </div>
  )
}

export default CavesChecks
