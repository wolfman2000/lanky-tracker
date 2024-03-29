import { useAztecBack, useAztecFront, useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useAnyKong, useRocket } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '../pools/Crates'
import AztecCheck from './AztecCheck'
import { logicBreak } from '@renderer/hooks/world'

const Vanilla: React.FC = () => {
  const llama = useAztecLlamaTemple()
  const aztecBack = useAztecBack()
  const rocket = useRocket()
  return (
    <>
      <AztecCheck
        id={2060}
        name="Aztec Crate Llama Interior"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2061}
        name="Aztec Crate Llama Exterior"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && rocket}
        canGetBreak={logicBreak(aztecBack) && rocket}
      />
      <AztecCheck
        id={2062}
        name="Aztec Crate Gongs"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in}
        canGetBreak={logicBreak(aztecBack)}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()

  return (
    <>
      <AztecCheck
        id={2260}
        name="Aztec Crate Location #1 (maybe)"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2261}
        name="Aztec Crate Location #2 (maybe)"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleCrates))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
