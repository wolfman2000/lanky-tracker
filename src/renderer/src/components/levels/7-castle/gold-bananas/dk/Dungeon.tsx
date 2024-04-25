import { useDkDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkDungeon: React.FC = () => (
  <CastleCheck
    id={7004}
    name="Castle Donkey Dungeon"
    region="Castle Underground"
    canGetLogic={useDkDungeonGb()}
  />
)

export default DkDungeon
