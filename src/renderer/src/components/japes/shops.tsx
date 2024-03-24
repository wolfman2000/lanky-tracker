import { usePlayJapes } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesCheck from './JapesCheck'

/**
 * Gather the list of shuffled shop item locations in Japes.
 * @todo Don't render anything if all shop items are vanilla.
 * @returns the shuffled shop locations in Japes.
 */
const JapesShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [state.dk, state.diddy, state.lanky, state.tiny, state.chunky])
  )
  const playJapes = usePlayJapes()
  const anyKong = dk || diddy || lanky || tiny || chunky

  return (
    <>
      <JapesCheck
        id={1110}
        name="Japes Cranky Shared"
        region="Japes Shops"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1111}
        name="Japes Cranky DK"
        region="Japes Shops"
        canGetLogic={playJapes && dk}
      />
      <JapesCheck
        id={1112}
        name="Japes Cranky Diddy"
        region="Japes Shops"
        canGetLogic={playJapes && diddy}
      />
      <JapesCheck
        id={1113}
        name="Japes Cranky Lanky"
        region="Japes Shops"
        canGetLogic={playJapes && lanky}
      />
      <JapesCheck
        id={1114}
        name="Japes Cranky Tiny"
        region="Japes Shops"
        canGetLogic={playJapes && tiny}
      />
      <JapesCheck
        id={1115}
        name="Japes Cranky Chunky"
        region="Japes Shops"
        canGetLogic={playJapes && chunky}
      />
      <JapesCheck
        id={1120}
        name="Japes Funky Shared"
        region="Japes Shops"
        canGetLogic={playJapes && anyKong}
      />
      <JapesCheck
        id={1121}
        name="Japes Funky DK"
        region="Japes Shops"
        canGetLogic={playJapes && dk}
      />
      <JapesCheck
        id={1122}
        name="Japes Funky Diddy"
        region="Japes Shops"
        canGetLogic={playJapes && diddy}
      />
      <JapesCheck
        id={1123}
        name="Japes Funky Lanky"
        region="Japes Shops"
        canGetLogic={playJapes && lanky}
      />
      <JapesCheck
        id={1124}
        name="Japes Funky Tiny"
        region="Japes Shops"
        canGetLogic={playJapes && tiny}
      />
      <JapesCheck
        id={1125}
        name="Japes Funky Chunky"
        region="Japes Shops"
        canGetLogic={playJapes && chunky}
      />
    </>
  )
}

export default JapesShops
