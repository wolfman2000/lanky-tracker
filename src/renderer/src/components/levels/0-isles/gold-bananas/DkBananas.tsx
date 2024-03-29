import { useShallow } from 'zustand/react/shallow'

import { usePlayCaves } from '@renderer/hooks/caves'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import {
  useAnyKong,
  useBongos,
  useCoconut,
  useGrab,
  useOrange,
  usePunch,
  useStrong,
  useTwirl
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import IslesCheck from '../IslesCheck'

const DkBananas: React.FC = () => {
  const anyKong = useAnyKong()
  const coconut = useCoconut()
  const islesKremAscent = useIslesKremAscent()
  const playFactory = usePlayFactory()
  const playCaves = usePlayCaves()
  const bongos = useBongos()
  const punch = usePunch()
  const twirl = useTwirl()
  const orange = useOrange()
  const strong = useStrong()
  const grab = useGrab()
  const [diddy, tiny] = useDonkStore(useShallow((state) => [state.moves.diddy, state.moves.tiny]))
  return (
    <>
      <IslesCheck id={1} name="Isles DK Japes Rock" region="Main Isle" canGetLogic={anyKong} />
      <IslesCheck
        id={2}
        name="Isles DK Caged Banana"
        region="Krem Isle"
        canGetLogic={coconut && islesKremAscent}
      />
      <IslesCheck
        id={3}
        name="Isles DK Instrument Pad"
        region="Japes-Forest Lobbies"
        canGetLogic={bongos && playFactory && grab}
        canGetBreak={bongos && playFactory && (diddy || tiny)}
      />
      <IslesCheck
        id={4}
        name="Isles DK Lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={playCaves && punch && strong}
        canGetBreak={playCaves && punch && (twirl || orange)}
      />
    </>
  )
}

export default DkBananas
