import CompanyPool from '@renderer/components/pools/Company'
import DropPool from '@renderer/components/pools/Drops'
import ShopPool from '@renderer/components/pools/Shops'
import { useCurrentBananaMedalCount } from '@renderer/hooks/consumables'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useJetpacCount } from '@renderer/hooks/settings'
import ArenaLocations from './Arenas'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import EnemyLocations from './Enemies'
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
  const medals = useCurrentBananaMedalCount()
  const jetpacCount = useJetpacCount()
  const anyKong = useAnyKong()
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
      <ArenaLocations />
      <CompanyPool>
        <IslesCheck
          id={105}
          name="Cranky Jetpac Game"
          canGetLogic={anyKong && medals >= jetpacCount}
        />
      </CompanyPool>
      <ShopPool>
        <IslesShops />
      </ShopPool>
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default IsleChecks
