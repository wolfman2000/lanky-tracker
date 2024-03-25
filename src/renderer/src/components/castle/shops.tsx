import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleCheck from './CastleCheck'
import { usePlayCastle } from '@renderer/hooks/castle'

/**
 * Show the shop checks within Creepy Castle.
 * @todo Don't render this if shop items aren't shuffled.
 * @returns the list of shop checks if shuffled.
 */
const CastleShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [state.dk, state.diddy, state.lanky, state.tiny, state.chunky])
  )
  const anyKong = dk || diddy || lanky || tiny || chunky
  const inStage = usePlayCastle()

  return (
    <>
      <CastleCheck
        id={7110}
        name="Castle Cranky Shared"
        region="Castle Shops"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7111}
        name="Castle Cranky DK"
        region="Castle Shops"
        canGetLogic={inStage && dk}
      />
      <CastleCheck
        id={7112}
        name="Castle Cranky Diddy"
        region="Castle Shops"
        canGetLogic={inStage && diddy}
      />
      <CastleCheck
        id={7113}
        name="Castle Cranky Lanky"
        region="Castle Shops"
        canGetLogic={inStage && lanky}
      />
      <CastleCheck
        id={7114}
        name="Castle Cranky Tiny"
        region="Castle Shops"
        canGetLogic={inStage && tiny}
      />
      <CastleCheck
        id={7115}
        name="Castle Cranky Chunky"
        region="Castle Shops"
        canGetLogic={inStage && chunky}
      />
      <CastleCheck
        id={7120}
        name="Castle Funky Shared"
        region="Castle Shops"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7121}
        name="Castle Funky DK"
        region="Castle Shops"
        canGetLogic={inStage && dk}
      />
      <CastleCheck
        id={7122}
        name="Castle Funky Diddy"
        region="Castle Shops"
        canGetLogic={inStage && diddy}
      />
      <CastleCheck
        id={7123}
        name="Castle Funky Lanky"
        region="Castle Shops"
        canGetLogic={inStage && lanky}
      />
      <CastleCheck
        id={7124}
        name="Castle Funky Tiny"
        region="Castle Shops"
        canGetLogic={inStage && tiny}
      />
      <CastleCheck
        id={7125}
        name="Castle Funky Chunky"
        region="Castle Shops"
        canGetLogic={inStage && chunky}
      />
      <CastleCheck
        id={7130}
        name="Castle Candy Shared"
        region="Castle Shops"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7131}
        name="Castle Candy DK"
        region="Castle Shops"
        canGetLogic={inStage && dk}
      />
      <CastleCheck
        id={7132}
        name="Castle Candy Diddy"
        region="Castle Shops"
        canGetLogic={inStage && diddy}
      />
      <CastleCheck
        id={7133}
        name="Castle Candy Lanky"
        region="Castle Shops"
        canGetLogic={inStage && lanky}
      />
      <CastleCheck
        id={7134}
        name="Castle Candy Tiny"
        region="Castle Shops"
        canGetLogic={inStage && tiny}
      />
      <CastleCheck
        id={7135}
        name="Castle Candy Chunky"
        region="Castle Shops"
        canGetLogic={inStage && chunky}
      />
    </>
  )
}

export default CastleShops
