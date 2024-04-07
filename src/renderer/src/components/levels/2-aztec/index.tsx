import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useAnyKong } from '@renderer/hooks/kongs'
import ArenaLocations from './Arenas'
import AztecCheck from './AztecCheck'
import CrateLocations from './Crates'
import DirtLocations from './Dirt'
import EnemyLocations from './Enemies'
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
import AztecShops from './shops'

const AztecChecks: React.FC = () => {
  const aztecFront = useAztecFront()
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
      <BananaMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </BananaMedalPool>
      <BossPool>
        <AztecCheck
          id={2105}
          name="Aztec Boss"
          region="Troff 'N' Scoff"
          canGetLogic={aztecFront.in && anyKong}
          canGetBreak={aztecFront.out && anyKong}
        />
      </BossPool>
      <AztecShops />
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default AztecChecks
