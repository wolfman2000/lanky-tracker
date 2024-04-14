import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import DropPool from '@renderer/components/pools/Drops'
import { useJapesRambi, useJapesSideArea, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong, useVine } from '@renderer/hooks/kongs'
import ArenaLocations from './Arenas'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import EnemyLocations from './Enemies'
import FairyLocations from './Fairies'
import JapesCheck from './JapesCheck'
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
import JapesShops from './shops'
const JapesChecks: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  const vine = useVine()
  const japesRambi = useJapesRambi()
  const japesSide = useJapesSideArea()
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
        <JapesCheck
          id={1105}
          name="Japes Boss Defeated"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong && (vine || japesSide || japesRambi)}
          canGetBreak={inStage && anyKong}
        />
      </BossPool>
      <JapesShops />
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default JapesChecks
