import ArenaPool from '@renderer/components/pools/Arenas'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import ShopPool from '@renderer/components/pools/Shops'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, useGrab } from '@renderer/hooks/kongs'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import FactoryCheck from './FactoryCheck'
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
import FactoryShops from './shops'

const FactoryChecks: React.FC = () => {
  const testing = useFactoryTesting()
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  const grab = useGrab()

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
        <FactoryCheck
          id={3090}
          name="Factory Arena"
          region="R&D Area"
          canGetLogic={testing && grab}
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
        <FactoryCheck
          id={3105}
          name="Factory Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong}
        />
      </BossPool>
      <ShopPool>
        <FactoryShops />
      </ShopPool>
    </div>
  )
}

export default FactoryChecks
