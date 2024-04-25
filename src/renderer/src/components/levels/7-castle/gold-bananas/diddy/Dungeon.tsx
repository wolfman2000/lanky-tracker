import { useDiddyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyDungeon: React.FC = () => (
  <CastleCheck
    id={7013}
    name="Castle Diddy Dungeon"
    region="Castle Underground"
    canGetLogic={useDiddyDungeonGb()}
  />
)

export default DiddyDungeon
