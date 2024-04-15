import { useDiddyCandleGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyCandleCabin: React.FC = () => {
  const candleGb = useDiddyCandleGb()
  return (
    <CavesCheck
      id={6013}
      name="Caves Diddy 5 Door Cabin Upper (Candle)"
      region="Cabins Area"
      canGetLogic={candleGb.in}
      canGetBreak={candleGb.out}
    />
  )
}

export default DiddyCandleCabin
