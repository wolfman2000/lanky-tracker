import useDonkStore from '@renderer/store'
import IslesCheck from './IslesCheck'
import { useShallow } from 'zustand/react/shallow'

/**
 * Gather the list of shuffled shop item locations in Isles.
 * @todo Don't render anything if all shop items are vanilla.
 * @returns the shuffled shop locations in Isles.
 */
const IslesShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [state.dk, state.diddy, state.lanky, state.tiny, state.chunky])
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
