import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonCheck from './GalleonCheck'
import { useGalleonOutskirts, usePlayGalleon } from '@renderer/hooks/galleon'

/**
 * Gather the list of shuffled shop item locations in Galleon.
 * @returns the shuffled shop locations in Galleon.
 */
const GalleonShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky, poolShops] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.lanky,
      state.moves.tiny,
      state.moves.chunky,
      state.settings.poolShops
    ])
  )
  const anyKong = dk || diddy || lanky || tiny || chunky
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  if (!poolShops) {
    return null
  }

  return (
    <>
      <GalleonCheck
        id={4110}
        name="Galleon Cranky Shared"
        region="Galleon Shops"
        canGetLogic={inStage && anyKong}
      />
      <GalleonCheck
        id={4111}
        name="Galleon Cranky DK"
        region="Galleon Shops"
        canGetLogic={inStage && dk}
      />
      <GalleonCheck
        id={4112}
        name="Galleon Cranky Diddy"
        region="Galleon Shops"
        canGetLogic={inStage && diddy}
      />
      <GalleonCheck
        id={4113}
        name="Galleon Cranky Lanky"
        region="Galleon Shops"
        canGetLogic={inStage && lanky}
      />
      <GalleonCheck
        id={4114}
        name="Galleon Cranky Tiny"
        region="Galleon Shops"
        canGetLogic={inStage && tiny}
      />
      <GalleonCheck
        id={4115}
        name="Galleon Cranky Chunky"
        region="Galleon Shops"
        canGetLogic={inStage && chunky}
      />
      <GalleonCheck
        id={4120}
        name="Galleon Funky Shared"
        region="Galleon Shops"
        canGetLogic={outskirts && anyKong}
      />
      <GalleonCheck
        id={4121}
        name="Galleon Funky DK"
        region="Galleon Shops"
        canGetLogic={outskirts && dk}
      />
      <GalleonCheck
        id={4122}
        name="Galleon Funky Diddy"
        region="Galleon Shops"
        canGetLogic={outskirts && diddy}
      />
      <GalleonCheck
        id={4123}
        name="Galleon Funky Lanky"
        region="Galleon Shops"
        canGetLogic={outskirts && lanky}
      />
      <GalleonCheck
        id={4124}
        name="Galleon Funky Tiny"
        region="Galleon Shops"
        canGetLogic={outskirts && tiny}
      />
      <GalleonCheck
        id={4125}
        name="Galleon Funky Chunky"
        region="Galleon Shops"
        canGetLogic={outskirts && chunky}
      />
      <GalleonCheck
        id={4130}
        name="Galleon Candy Shared"
        region="Galleon Shops"
        canGetLogic={outskirts && anyKong}
      />
      <GalleonCheck
        id={4131}
        name="Galleon Candy DK"
        region="Galleon Shops"
        canGetLogic={outskirts && dk}
      />
      <GalleonCheck
        id={4132}
        name="Galleon Candy Diddy"
        region="Galleon Shops"
        canGetLogic={outskirts && diddy}
      />
      <GalleonCheck
        id={4133}
        name="Galleon Candy Lanky"
        region="Galleon Shops"
        canGetLogic={outskirts && lanky}
      />
      <GalleonCheck
        id={4134}
        name="Galleon Candy Tiny"
        region="Galleon Shops"
        canGetLogic={outskirts && tiny}
      />
      <GalleonCheck
        id={4135}
        name="Galleon Candy Chunky"
        region="Galleon Shops"
        canGetLogic={outskirts && chunky}
      />
    </>
  )
}

export default GalleonShops
