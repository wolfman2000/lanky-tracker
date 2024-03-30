import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import IslesCheck from './IslesCheck'

/**
 * Gather the list of shuffled shop item locations in Isles.
 * @returns the shuffled shop locations in Isles.
 */
const IslesShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.lanky,
      state.moves.tiny,
      state.moves.chunky
    ])
  )
  const anyKong = dk || diddy || lanky || tiny || chunky

  return (
    <>
      <IslesCheck id={110} name="Isles Cranky Shared" region="Isles Shops" canGetLogic={anyKong} />
      <IslesCheck id={111} name="Isles Cranky DK" region="Isles Shops" canGetLogic={dk} />
      <IslesCheck id={112} name="Isles Cranky Diddy" region="Isles Shops" canGetLogic={diddy} />
      <IslesCheck id={113} name="Isles Cranky Lanky" region="Isles Shops" canGetLogic={lanky} />
      <IslesCheck id={114} name="Isles Cranky Tiny" region="Isles Shops" canGetLogic={tiny} />
      <IslesCheck id={115} name="Isles Cranky Chunky" region="Isles Shops" canGetLogic={chunky} />
    </>
  )
}

export default IslesShops
