import {
  useCheckLankyCage,
  useCheckLankyCastle,
  useCheckLankyMusicPad,
  useCheckLankyPrison
} from '@renderer/hooks/isles'
import IslesCheck from '../IslesCheck'

const LankyBananas: React.FC = () => {
  const cage = useCheckLankyCage()
  const prison = useCheckLankyPrison()
  const music = useCheckLankyMusicPad()
  const lobby = useCheckLankyCastle()
  return (
    <>
      <IslesCheck id={20} name="Isles Lanky Grape Cage" region="Krem Isle" canGetLogic={cage} />
      <IslesCheck
        id={21}
        name="Isles Lanky Sprint Cage"
        region="Krem Isle"
        canGetLogic={prison.in}
        canGetBreak={prison.out}
      />
      <IslesCheck
        id={22}
        name="Isles Lanky Japes Instrument"
        region="Japes-Forest Lobbies"
        canGetLogic={music}
      />
      <IslesCheck
        id={23}
        name="Isles Lanky Castle Lobby Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={lobby.in}
        canGetBreak={lobby.out}
      />
    </>
  )
}

export default LankyBananas
