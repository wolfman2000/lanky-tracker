import {
  useDiddyCandleGb,
  useDiddyGauntletGb,
  useDiddyIglooGb,
  useDiddyWaterfallGb
} from '@renderer/hooks/caves'
import CavesCheck from '../CavesCheck'

const DiddyBananas: React.FC = () => {
  const cabinGauntlet = useDiddyGauntletGb()
  const waterfallGb = useDiddyWaterfallGb()
  const candleGb = useDiddyCandleGb()
  return (
    <>
      <CavesCheck
        id={6010}
        name="Caves Diddy Waterfall"
        region="Main Caves Area"
        canGetLogic={waterfallGb.in}
        canGetBreak={waterfallGb.out}
      />
      <CavesCheck
        id={6011}
        name="Caves Diddy 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={useDiddyIglooGb()}
      />
      <CavesCheck
        id={6012}
        name="Caves Diddy 5 Door Cabin Lower"
        region="Cabins Area"
        canGetLogic={cabinGauntlet.in}
        canGetBreak={cabinGauntlet.out}
      />
      <CavesCheck
        id={6013}
        name="Caves Diddy 5 Door Cabin Upper"
        region="Cabins Area"
        canGetLogic={candleGb.in}
        canGetBreak={candleGb.out}
      />
    </>
  )
}

export default DiddyBananas
