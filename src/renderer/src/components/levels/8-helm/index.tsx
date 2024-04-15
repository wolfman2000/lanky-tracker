import DropPool from '@renderer/components/pools/Drops'
import BlastArena from './arenas/Blast'
import ShuffledArenas from './arenas/Shuffled'
import BossCheck from './boss'
import EnemyLocations from './enemies'
import EndOfHelmFairies from './fairies/End'
import ShuffledFairies from './fairies/Shuffled'
import MedalLocations from './medals'

const HelmChecks: React.FC = () => {
  return (
    <div className="grid">
      <BlastArena />
      <ShuffledArenas />
      <MedalLocations />
      <BossCheck />
      <EndOfHelmFairies />
      <ShuffledFairies />
      <ShuffledArenas />
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default HelmChecks
