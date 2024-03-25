import { useAztecBack, useAztecFront } from '@renderer/hooks/aztec'
import useDonkStore from '@renderer/store'
import AztecCheck from './AztecCheck'
import { useShallow } from 'zustand/react/shallow'

const AztecShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [state.dk, state.diddy, state.lanky, state.tiny, state.chunky])
  )
  const anyKong = dk || diddy || lanky || tiny || chunky
  const aztecFront = useAztecFront()
  const aztecBack = useAztecBack()

  return (
    <>
      <AztecCheck
        id={2110}
        name="Aztec Cranky Shared"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && anyKong}
        canGetBreak={aztecBack.out && anyKong}
      />
      <AztecCheck
        id={2111}
        name="Aztec Cranky DK"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && dk}
        canGetBreak={aztecBack.out && dk}
      />
      <AztecCheck
        id={2112}
        name="Aztec Cranky Diddy"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && diddy}
        canGetBreak={aztecBack.out && diddy}
      />
      <AztecCheck
        id={2113}
        name="Aztec Cranky Lanky"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && lanky}
        canGetBreak={aztecBack.out && lanky}
      />
      <AztecCheck
        id={2114}
        name="Aztec Cranky Tiny"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && tiny}
        canGetBreak={aztecBack.out && tiny}
      />
      <AztecCheck
        id={2115}
        name="Aztec Cranky Chunky"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && chunky}
        canGetBreak={aztecBack.out && chunky}
      />
      <AztecCheck
        id={2120}
        name="Aztec Funky Shared"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && anyKong}
        canGetBreak={aztecBack.out && anyKong}
      />
      <AztecCheck
        id={2121}
        name="Aztec Funky DK"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && dk}
        canGetBreak={aztecBack.out && dk}
      />
      <AztecCheck
        id={2122}
        name="Aztec Funky Diddy"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && diddy}
        canGetBreak={aztecBack.out && diddy}
      />
      <AztecCheck
        id={2123}
        name="Aztec Funky Lanky"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && lanky}
        canGetBreak={aztecBack.out && lanky}
      />
      <AztecCheck
        id={2124}
        name="Aztec Funky Tiny"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && tiny}
        canGetBreak={aztecBack.out && tiny}
      />
      <AztecCheck
        id={2125}
        name="Aztec Funky Chunky"
        region="Aztec Shops"
        canGetLogic={aztecBack.in && chunky}
        canGetBreak={aztecBack.out && chunky}
      />
      <AztecCheck
        id={2130}
        name="Aztec Candy Shared"
        region="Aztec Shops"
        canGetLogic={aztecFront.in && anyKong}
        canGetBreak={aztecFront.out && anyKong}
      />
      <AztecCheck
        id={2131}
        name="Aztec Candy DK"
        region="Aztec Shops"
        canGetLogic={aztecFront.in && dk}
        canGetBreak={aztecFront.out && dk}
      />
      <AztecCheck
        id={2132}
        name="Aztec Candy Diddy"
        region="Aztec Shops"
        canGetLogic={aztecFront.in && diddy}
        canGetBreak={aztecFront.out && diddy}
      />
      <AztecCheck
        id={2133}
        name="Aztec Candy Lanky"
        region="Aztec Shops"
        canGetLogic={aztecFront.in && lanky}
        canGetBreak={aztecFront.out && lanky}
      />
      <AztecCheck
        id={2134}
        name="Aztec Candy Tiny"
        region="Aztec Shops"
        canGetLogic={aztecFront.in && tiny}
        canGetBreak={aztecFront.out && tiny}
      />
      <AztecCheck
        id={2135}
        name="Aztec Candy Chunky"
        region="Aztec Shops"
        canGetLogic={aztecFront.in && chunky}
        canGetBreak={aztecFront.out && chunky}
      />
    </>
  )
}

export default AztecShops
