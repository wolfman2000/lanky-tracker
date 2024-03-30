import ArenaPool from '@renderer/components/pools/Arenas'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import ShopPool from '@renderer/components/pools/Shops'
import {
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useDive, usePunch, useVine } from '@renderer/hooks/kongs'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import FairyLocations from './Fairies'
import GalleonCheck from './GalleonCheck'
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
import GalleonShops from './shops'

const GalleonChecks: React.FC = () => {
  const inStage = usePlayGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const punch = usePunch()
  const vine = useVine()
  const dive = useDive()

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
        <GalleonCheck
          id={4090}
          name="Galleon Arena"
          region="Galleon Caverns"
          canGetLogic={inStage && punch}
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
        <GalleonCheck
          id={4105}
          name="Galleon Boss"
          region="Troff 'N' Scoff"
          canGetLogic={(inStage && vine) || (dive && (lighthouseArea || outskirts))}
        />
      </BossPool>
      <ShopPool>
        <GalleonShops />
      </ShopPool>
    </div>
  )
}

export default GalleonChecks
