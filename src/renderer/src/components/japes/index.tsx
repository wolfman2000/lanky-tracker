import { useJapesRambi, useJapesSideArea, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong, useVine } from '@renderer/hooks/kongs'
import ArenaPool from '../pools/Arenas'
import BananaMedalPool from '../pools/BananaMedals'
import BossPool from '../pools/Bosses'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
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
      <ArenaPool>
        <JapesCheck
          id={1090}
          name="Japes Arena"
          region="Japes Hillside"
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
        <JapesCheck
          id={1105}
          name="Japes Boss"
          region="Troff 'N' Scoff"
          canGetLogic={inStage && anyKong && (vine || japesSide || japesRambi)}
          canGetBreak={inStage && anyKong}
        />
      </BossPool>
      <JapesShops />
    </div>
  )
}

export default JapesChecks
