import { useLankyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyDungeon: React.FC = () => {
  const dungeonGb = useLankyDungeonGb()
  return (
    <CastleCheck
      id={7023}
      name="Castle Lanky Dungeon"
      region="Castle Underground"
      canGetLogic={dungeonGb.in}
      canGetBreak={dungeonGb.out}
    />
  )
}

export default LankyDungeon
