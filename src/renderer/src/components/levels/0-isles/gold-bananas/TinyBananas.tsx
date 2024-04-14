import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useCheckBananaFairyIsle,
  useCheckTinyAztecLobby,
  useCheckTinyFeatherCage,
  useCheckTinyGalleonLobby,
  useCheckTinyMusicPad
} from '@renderer/hooks/isles'
import IslesCheck from '../IslesCheck'

const TinyBananas: React.FC = () => {
  const checkBfi = useCheckBananaFairyIsle()
  const checkFeatherCage = useCheckTinyFeatherCage()
  const checkTinyMusicPad = useCheckTinyMusicPad()
  const checkTinyAztec = useCheckTinyAztecLobby()
  const checkTinyGalleon = useCheckTinyGalleonLobby()

  return (
    <>
      <IslesCheck
        id={30}
        name="Isles Tiny Feather Cage"
        region="Outer Isles"
        canGetLogic={checkFeatherCage}
      />
      <IslesCheck
        id={31}
        name="Isles Tiny Saxophone Pad"
        region="Krem Isle"
        canGetLogic={checkTinyMusicPad}
      />
      <IslesCheck
        id={32}
        name="Isles Tiny Aztec Lobby Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={checkTinyAztec.in}
        canGetBreak={checkTinyAztec.out}
      />
      <IslesCheck
        id={33}
        name="Isles Tiny Galleon Lobby Swim"
        region="Japes-Forest Lobbies"
        canGetLogic={checkTinyGalleon.in}
        canGetBreak={checkTinyGalleon.out}
      />
      <ToughGoldenBanana>
        <IslesCheck
          id={47}
          name="Returning the Banana Fairies"
          region="Outer Isles"
          canGetLogic={checkBfi}
        />
      </ToughGoldenBanana>
    </>
  )
}

export default TinyBananas
