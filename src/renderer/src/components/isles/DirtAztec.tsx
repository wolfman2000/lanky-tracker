import { useShallow } from 'zustand/react/shallow'
import { useBoulderTech } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import IslesCheck from './IslesCheck'
import {
  useIslesCrossFungi,
  useIslesFungiIsland,
  useIslesRocket,
  useIslesUpper
} from '@renderer/hooks/isles'

/**
 * The standard dirt location on top of the Aztec roof.
 * @returns The dirt check element if it is necessary.
 */
const DirtAztec: React.FC = () => {
  const crossFungi = useIslesCrossFungi()
  const islesFungi = useIslesFungiIsland()
  const islesRocket = useIslesRocket()
  const islesUpper = useIslesUpper()
  const boulderTech = useBoulderTech()
  const [dk, diddy, rocket, tiny, twirl, shockwave, dirtShuffle, rainbowCoinShuffle] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.diddy,
      state.rocket,
      state.tiny,
      state.twirl,
      state.shockwave,
      state.dirtShuffle,
      state.rainbowCoinShuffle
    ])
  )

  if (dirtShuffle || !rainbowCoinShuffle) {
    return null
  }

  return (
    <IslesCheck
      id={74}
      name="Isles Dirt Aztec Roof"
      region="Main Isle"
      canGetLogic={islesRocket && islesFungi && diddy && rocket && shockwave}
      canGetBreak={
        shockwave &&
        ((islesUpper && boulderTech && (diddy || tiny)) || (crossFungi && (dk || (tiny && twirl))))
      }
    />
  )
}

export default DirtAztec