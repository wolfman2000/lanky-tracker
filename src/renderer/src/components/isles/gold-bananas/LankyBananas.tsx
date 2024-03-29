import { usePlayCastle } from '@renderer/hooks/castle'
import { usePlayJapes } from '@renderer/hooks/japes'
import {
  useBalloon,
  useBoulderTech,
  useDk,
  useGrape,
  useSprint,
  useTiny,
  useTrombone
} from '@renderer/hooks/kongs'
import IslesCheck from '../IslesCheck'

const LankyBananas: React.FC = () => {
  const grape = useGrape()
  const sprint = useSprint()
  const boulderTech = useBoulderTech()
  const trombone = useTrombone()
  const playJapes = usePlayJapes()
  const balloon = useBalloon()
  const tiny = useTiny()
  const playCastle = usePlayCastle()
  const dk = useDk()
  return (
    <>
      <IslesCheck id={20} name="Isles Lanky Caged Banana" region="Krem Isle" canGetLogic={grape} />
      <IslesCheck
        id={21}
        name="Isles Lanky Prison Orangsprint"
        region="Krem Isle"
        canGetLogic={sprint}
        canGetBreak={dk}
      />
      <IslesCheck
        id={22}
        name="Isles Lanky Instrument Pad"
        region="Main Isle"
        canGetLogic={playJapes && boulderTech && trombone}
      />
      <IslesCheck
        id={23}
        name="Isles Lanky Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playCastle && boulderTech && balloon}
        canGetBreak={playCastle && tiny}
      />
    </>
  )
}

export default LankyBananas
