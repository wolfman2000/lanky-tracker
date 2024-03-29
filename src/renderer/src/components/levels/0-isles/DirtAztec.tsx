import { useShallow } from 'zustand/react/shallow'

import {
  useIslesCrossFungi,
  useIslesFungiIsland,
  useIslesRocket,
  useIslesUpper
} from '@renderer/hooks/isles'
import { useBoulderTech, useShockwave } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import IslesCheck from './IslesCheck'

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
  const shockwave = useShockwave()
  const [dk, diddy, rocket, tiny, twirl, dirtShuffle, rainbowCoinShuffle] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.rocket,
      state.moves.tiny,
      state.moves.twirl,
      state.settings.shuffleDirt,
      state.settings.poolRainbowCoins
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
