import CratePool from '@renderer/components/pools/Crates'
import {
  useAztecBack,
  useGeneralThing,
  useLlamaCrate,
  useLlamaOutsideCrate
} from '@renderer/hooks/aztec'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const llama = useLlamaCrate()
  const aztecBack = useAztecBack()
  const outside = useLlamaOutsideCrate()
  return (
    <>
      <AztecCheck
        id={2060}
        name="Aztec Crate: Llama Temple Entrance"
        region="Llama Temple"
        canGetLogic={llama.in}
        canGetBreak={logicBreak(llama)}
      />
      <AztecCheck
        id={2061}
        name="Aztec Crate: On Llama Temple"
        region="Aztec Oasis And Totem Area"
        canGetLogic={outside.in}
        canGetBreak={outside.out}
      />
      <AztecCheck
        id={2062}
        name="Aztec Crate: Near Gong Tower"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in}
        canGetBreak={logicBreak(aztecBack)}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <AztecCheck
        id={2260}
        name="Aztec Crate Location #1 (maybe)"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2261}
        name="Aztec Crate Location #2 (maybe)"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
