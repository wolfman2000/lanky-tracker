import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import DropPool from '@renderer/components/pools/Drops'
import {
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useDive, useVine } from '@renderer/hooks/kongs'
import ArenaLocations from './Arenas'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import EnemyLocations from './Enemies'
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
      <ArenaLocations />
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
      <GalleonShops />
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default GalleonChecks
