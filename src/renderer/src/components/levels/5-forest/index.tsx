import ArenaPool from '@renderer/components/pools/Arenas'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import { usePlayForest } from '@renderer/hooks/forest'
import { useAnyKong } from '@renderer/hooks/kongs'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import FairyLocations from './Fairies'
import ForestCheck from './ForestCheck'
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
import ForestShops from './shops'

const ForestChecks: React.FC = () => {
  const inStage = usePlayForest()
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
      <ArenaPool>
        <ForestCheck
          id={5090}
          name="Forest Arena"
          region="Giant Mushroom Exterior"
          canGetLogic={inStage && anyKong}
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
        <ForestCheck
          id={5105}
          name="Forest Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong}
        />
      </BossPool>
      <ForestShops />
    </div>
  )
}

export default ForestChecks
