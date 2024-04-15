import { useDiddyWaterfallGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const WaterfallBarrel: React.FC = () => {
  const waterfallGb = useDiddyWaterfallGb()
  return (
    <CavesCheck
      id={6010}
      name="Caves Diddy Jetpack Barrel"
      region="Main Caves Area"
      canGetLogic={waterfallGb.in}
      canGetBreak={waterfallGb.out}
    />
  )
}

export default WaterfallBarrel
