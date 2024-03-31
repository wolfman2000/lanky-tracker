import { useJapesKongGates, usePlayJapes } from '@renderer/hooks/japes'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import JapesCheck from './JapesCheck'
import { useAnyKong } from '@renderer/hooks/kongs'

/**
 * Gather the list of shuffled shop item locations in Japes.
 * @returns the shuffled shop locations in Japes.
 */
const JapesShops: React.FC = () => {
  const anyKong = useAnyKong()
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.lanky,
      state.moves.tiny,
      state.moves.chunky
    ])
  )
  const playJapes = usePlayJapes()
  const kongGates = useJapesKongGates()

  return (
    <>
      <JapesCheck
        id={1110}
        name="Japes Cranky Shared"
        region="Japes Shops"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1111}
        name="Japes Cranky DK"
        region="Japes Shops"
        canGetLogic={kongGates && dk}
      />
      <JapesCheck
        id={1112}
        name="Japes Cranky Diddy"
        region="Japes Shops"
        canGetLogic={kongGates && diddy}
      />
      <JapesCheck
        id={1113}
        name="Japes Cranky Lanky"
        region="Japes Shops"
        canGetLogic={kongGates && lanky}
      />
      <JapesCheck
        id={1114}
        name="Japes Cranky Tiny"
        region="Japes Shops"
        canGetLogic={kongGates && tiny}
      />
      <JapesCheck
        id={1115}
        name="Japes Cranky Chunky"
        region="Japes Shops"
        canGetLogic={kongGates && chunky}
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
