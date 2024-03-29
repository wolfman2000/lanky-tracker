import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from './FactoryCheck'

const FactoryShops: React.FC = () => {
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
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  if (!poolShops) {
    return null
  }

  return (
    <>
      <FactoryCheck
        id={3110}
        name="Factory Cranky Shared"
        region="Factory Shops"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3111}
        name="Factory Cranky DK"
        region="Factory Shops"
        canGetLogic={inStage && dk}
      />
      <FactoryCheck
        id={3112}
        name="Factory Cranky Diddy"
        region="Factory Shops"
        canGetLogic={inStage && diddy}
      />
      <FactoryCheck
        id={3113}
        name="Factory Cranky Lanky"
        region="Factory Shops"
        canGetLogic={inStage && lanky}
      />
      <FactoryCheck
        id={3114}
        name="Factory Cranky Tiny"
        region="Factory Shops"
        canGetLogic={inStage && tiny}
      />
      <FactoryCheck
        id={3115}
        name="Factory Cranky Chunky"
        region="Factory Shops"
        canGetLogic={inStage && chunky}
      />
      <FactoryCheck
        id={3120}
        name="Factory Funky Shared"
        region="Factory Shops"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3121}
        name="Factory Funky DK"
        region="Factory Shops"
        canGetLogic={testing && dk}
      />
      <FactoryCheck
        id={3122}
        name="Factory Funky Diddy"
        region="Factory Shops"
        canGetLogic={testing && diddy}
      />
      <FactoryCheck
        id={3123}
        name="Factory Funky Lanky"
        region="Factory Shops"
        canGetLogic={testing && lanky}
      />
      <FactoryCheck
        id={3124}
        name="Factory Funky Tiny"
        region="Factory Shops"
        canGetLogic={testing && tiny}
      />
      <FactoryCheck
        id={3125}
        name="Factory Funky Chunky"
        region="Factory Shops"
        canGetLogic={testing && chunky}
      />
      <FactoryCheck
        id={3130}
        name="Factory Candy Shared"
        region="Factory Shops"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3131}
        name="Factory Candy DK"
        region="Factory Shops"
        canGetLogic={inStage && dk}
      />
      <FactoryCheck
        id={3132}
        name="Factory Candy Diddy"
        region="Factory Shops"
        canGetLogic={inStage && diddy}
      />
      <FactoryCheck
        id={3133}
        name="Factory Candy Lanky"
        region="Factory Shops"
        canGetLogic={inStage && lanky}
      />
      <FactoryCheck
        id={3134}
        name="Factory Candy Tiny"
        region="Factory Shops"
        canGetLogic={inStage && tiny}
      />
      <FactoryCheck
        id={3135}
        name="Factory Candy Chunky"
        region="Factory Shops"
        canGetLogic={inStage && chunky}
      />
    </>
  )
}

export default FactoryShops
