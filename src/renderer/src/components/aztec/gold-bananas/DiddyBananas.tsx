import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useAztec5DoorTemple, useAztecBack, useAztecTinyTemple } from '@renderer/hooks/aztec'
import { useCharge, useDive, usePeanut, useRocket } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../AztecCheck'

const DiddyBananas: React.FC = () => {
  const templeTiny = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const aztec5Door = useAztec5DoorTemple()
  const charge = useCharge()
  const rocket = useRocket()
  const peanut = usePeanut()
  const dive = useDive()
  return (
    <>
      <AztecCheck
        id={2010}
        name="Aztec Diddy Free Tiny"
        region="Tiny Temple"
        canGetLogic={templeTiny.in && dive}
        canGetBreak={logicBreak(templeTiny) && dive}
      />
      <AztecCheck
        id={2011}
        name="Aztec Diddy Ram Gongs"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecBack.in && charge && rocket}
        canGetBreak={logicBreak(aztecBack) && charge && rocket}
      />
      <ToughGoldenBanana>
        <AztecCheck
          id={2012}
          name="Aztec Diddy Vulture Race"
          region="Aztec Oasis And Totem Area"
          canGetLogic={aztecBack.in && rocket}
          canGetBreak={logicBreak(aztecBack) && rocket}
        />
      </ToughGoldenBanana>
      <AztecCheck
        id={2013}
        name="Aztec Diddy 5 Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && peanut}
        canGetBreak={logicBreak(aztec5Door) && peanut}
      />
    </>
  )
}

export default DiddyBananas
