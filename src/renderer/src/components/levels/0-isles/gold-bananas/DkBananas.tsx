import {
  useCheckDkCavesLobby,
  useCheckDkCoconutCage,
  useCheckDkJapesRock,
  useCheckDkMusicPad
} from '@renderer/hooks/isles'
import IslesCheck from '../IslesCheck'

const DkBananas: React.FC = () => {
  const japesRock = useCheckDkJapesRock()
  const cage = useCheckDkCoconutCage()
  const pad = useCheckDkMusicPad()
  const cave = useCheckDkCavesLobby()
  return (
    <>
      <IslesCheck id={1} name="Isles DK Japes Rock" region="Main Isle" canGetLogic={japesRock} />
      <IslesCheck id={2} name="Isles DK Caged Banana" region="Krem Isle" canGetLogic={cage} />
      <IslesCheck
        id={3}
        name="Isles DK Instrument Pad"
        region="Japes-Forest Lobbies"
        canGetLogic={pad.in}
        canGetBreak={pad.out}
      />
      <IslesCheck
        id={4}
        name="Isles DK Lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={cave.in}
        canGetBreak={cave.out}
      />
    </>
  )
}

export default DkBananas
