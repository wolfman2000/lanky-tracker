import useDonkStore from '@renderer/store'
import CavesCheck from './CavesCheck'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useShallow } from 'zustand/react/shallow'

const CavesShops: React.FC = () => {
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
  const inStage = usePlayCaves()

  return (
    <>
      <CavesCheck
        id={6110}
        name="Caves Cranky Shared"
        region="Caves Shops"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6111}
        name="Caves Cranky DK"
        region="Caves Shops"
        canGetLogic={inStage && dk}
      />
      <CavesCheck
        id={6112}
        name="Caves Cranky Diddy"
        region="Caves Shops"
        canGetLogic={inStage && diddy}
      />
      <CavesCheck
        id={6113}
        name="Caves Cranky Lanky"
        region="Caves Shops"
        canGetLogic={inStage && lanky}
      />
      <CavesCheck
        id={6114}
        name="Caves Cranky Tiny"
        region="Caves Shops"
        canGetLogic={inStage && tiny}
      />
      <CavesCheck
        id={6115}
        name="Caves Cranky Chunky"
        region="Caves Shops"
        canGetLogic={inStage && chunky}
      />
      <CavesCheck
        id={6120}
        name="Caves Funky Shared"
        region="Caves Shops"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6121}
        name="Caves Funky DK"
        region="Caves Shops"
        canGetLogic={inStage && dk}
      />
      <CavesCheck
        id={6122}
        name="Caves Funky Diddy"
        region="Caves Shops"
        canGetLogic={inStage && diddy}
      />
      <CavesCheck
        id={6123}
        name="Caves Funky Lanky"
        region="Caves Shops"
        canGetLogic={inStage && lanky}
      />
      <CavesCheck
        id={6124}
        name="Caves Funky Tiny"
        region="Caves Shops"
        canGetLogic={inStage && tiny}
      />
      <CavesCheck
        id={6125}
        name="Caves Funky Chunky"
        region="Caves Shops"
        canGetLogic={inStage && chunky}
      />
      <CavesCheck
        id={6130}
        name="Caves Candy Shared"
        region="Caves Shops"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6131}
        name="Caves Candy DK"
        region="Caves Shops"
        canGetLogic={inStage && dk}
      />
      <CavesCheck
        id={6132}
        name="Caves Candy Diddy"
        region="Caves Shops"
        canGetLogic={inStage && diddy}
      />
      <CavesCheck
        id={6133}
        name="Caves Candy Lanky"
        region="Caves Shops"
        canGetLogic={inStage && lanky}
      />
      <CavesCheck
        id={6134}
        name="Caves Candy Tiny"
        region="Caves Shops"
        canGetLogic={inStage && tiny}
      />
      <CavesCheck
        id={6135}
        name="Caves Candy Chunky"
        region="Caves Shops"
        canGetLogic={inStage && chunky}
      />
    </>
  )
}

export default CavesShops
