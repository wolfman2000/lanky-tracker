import ArenaPool from '@renderer/components/pools/Arenas'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossPool from '@renderer/components/pools/Bosses'
import { useAztecFront, useAztecTinyTemple, useSlamAztec } from '@renderer/hooks/aztec'
import { useAnyGun, useAnyKong, useDive, useGrape, useLanky } from '@renderer/hooks/kongs'
import AztecCheck from './AztecCheck'
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
import AztecShops from './shops'

const AztecChecks: React.FC = () => {
  const aztecFront = useAztecFront()
  const canSlam = useSlamAztec()
  const anyGun = useAnyGun()
  const anyKong = useAnyKong()
  const templeTiny = useAztecTinyTemple()
  const lanky = useLanky()
  const grape = useGrape()
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
        <AztecCheck
          id={2090}
          name="Aztec Arena"
          region="Tiny Temple"
          canGetLogic={templeTiny.in && dive && canSlam && lanky && grape}
          canGetBreak={templeTiny.out && dive && canSlam && lanky && anyGun}
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
        <AztecCheck
          id={1105}
          name="Aztec Boss"
          region="Troff 'N' Scoff"
          canGetLogic={aztecFront.in && anyKong}
          canGetBreak={aztecFront.out && anyKong}
        />
      </BossPool>
      <AztecShops />
    </div>
  )
}

export default AztecChecks
