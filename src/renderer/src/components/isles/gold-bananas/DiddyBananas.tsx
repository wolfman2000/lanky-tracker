import { useShallow } from 'zustand/react/shallow'

import { usePlayCaves } from '@renderer/hooks/caves'
import { useIslesCrossFungi, useIslesKremAscent, useIslesRocket } from '@renderer/hooks/isles'
import {
  useAnyKong,
  useBoulderTech,
  useGuitar,
  usePeanut,
  useRocket,
  useSpring,
  useTwirl
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import IslesCheck from '../IslesCheck'

const DiddyBananas: React.FC = () => {
  const anyKong = useAnyKong()
  const spring = useSpring()
  const islesKremAscent = useIslesKremAscent()
  const islesRocket = useIslesRocket()
  const boulderTech = useBoulderTech()
  const playCaves = usePlayCaves()
  const crossFungi = useIslesCrossFungi()
  const guitar = useGuitar()
  const twirl = useTwirl()
  const rocket = useRocket()
  const peanut = usePeanut()
  const [diddy, tiny, autoBonus] = useDonkStore(
    useShallow((state) => [state.moves.diddy, state.moves.tiny, state.settings.autoBonus])
  )

  return (
    <>
      <IslesCheck
        id={10}
        name="Isles Diddy Snides Lobby"
        region="Krem Isle"
        canGetLogic={islesKremAscent && ((autoBonus && anyKong) || spring)}
        canGetBreak={islesKremAscent && boulderTech && (diddy || tiny)}
      />
      <IslesCheck
        id={11}
        name="Isles Diddy Caged Banana"
        region="Main Isle"
        canGetLogic={crossFungi.in && peanut}
        canGetBreak={logicBreak(crossFungi) && peanut}
      />
      <IslesCheck
        id={12}
        name="Isles Diddy Summit"
        region="Main Isle"
        canGetLogic={islesRocket && rocket && diddy}
        canGetBreak={logicBreak(crossFungi) && twirl}
      />
      <IslesCheck
        id={13}
        name="Isles Diddy Instrument Pad"
        region="Caves-Helm Lobbies"
        canGetLogic={playCaves && rocket && guitar}
        canGetBreak={playCaves && boulderTech && twirl && guitar}
      />
    </>
  )
}

export default DiddyBananas
