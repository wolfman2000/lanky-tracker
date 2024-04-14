import {
  useLankyCagedGb,
  useLankyGateGb,
  useLankyPaintingGb,
  useLankySlopeGb
} from '@renderer/hooks/japes'
import JapesCheck from '../JapesCheck'

const LankyBananas: React.FC = () => {
  const slopeGb = useLankySlopeGb()
  const paintingGb = useLankyPaintingGb()
  return (
    <>
      <JapesCheck
        id={1020}
        name="Japes Lanky Timed Cage Banana"
        region="Japes Hillside"
        canGetLogic={useLankyCagedGb()}
      />
      <JapesCheck
        id={1021}
        name="Japes Lanky Grape Gate Barrel"
        region="Japes Hillside"
        canGetLogic={useLankyGateGb()}
      />
      <JapesCheck
        id={1022}
        name="Japes Lanky Slope Barrel"
        region="Stormy Tunnel Area"
        canGetLogic={slopeGb.in}
        canGetBreak={slopeGb.out}
      />
      <JapesCheck
        id={1023}
        name="Japes Lanky Painting Room Zingers"
        region="Japes Caves And Mines"
        canGetLogic={paintingGb.in}
        canGetBreak={paintingGb.out}
      />
    </>
  )
}

export default LankyBananas
