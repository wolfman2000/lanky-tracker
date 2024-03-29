import { useShallow } from 'zustand/react/shallow'

import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { usePlayAztec } from '@renderer/hooks/aztec'
import { useSlamGalleon } from '@renderer/hooks/galleon'
import { useIslesKremTop } from '@renderer/hooks/isles'
import {
  useCharge,
  useChunky,
  useDive,
  useFeather,
  useMini,
  useSax,
  useSuperSlam,
  useTwirl
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import IslesCheck from '../IslesCheck'

const TinyBananas: React.FC = () => {
  const feather = useFeather()
  const mini = useMini()
  const twirl = useTwirl()
  const sax = useSax()
  const islesKremTop = useIslesKremTop()
  const charge = useCharge()
  const playAztec = usePlayAztec()
  const chunky = useChunky()
  const dive = useDive()
  const slam = useSuperSlam()
  const [progressiveSlams, fairies, fairyCount] = useDonkStore(
    useShallow((state) => [
      state.settings.progressiveSlams,
      state.consumables.fairies,
      state.settings.fairyCount
    ])
  )
  const slamGalleon = useSlamGalleon()
  const actualSlam = progressiveSlams ? slamGalleon : slam

  return (
    <>
      <IslesCheck
        id={30}
        name="Isles Tiny Caged Banana"
        region="Outer Isles"
        canGetLogic={feather}
      />
      <IslesCheck
        id={31}
        name="Isles Tiny Instrument Pad"
        region="Krem Isle"
        canGetLogic={islesKremTop && sax}
      />
      <IslesCheck
        id={32}
        name="Isles Tiny Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={playAztec && charge && twirl}
        canGetBreak={playAztec && charge}
      />
      <IslesCheck
        id={33}
        name="Isles Tiny Galleon Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={chunky && actualSlam && dive && twirl && mini}
        canGetBreak={chunky && actualSlam && dive && mini}
      />
      <ToughGoldenBanana>
        <IslesCheck
          id={47}
          name="Isles Rareware Banana"
          region="Outer Isles"
          canGetLogic={fairies >= fairyCount && mini}
        />
      </ToughGoldenBanana>
    </>
  )
}

export default TinyBananas
