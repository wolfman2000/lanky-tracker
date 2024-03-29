import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useJapesMine,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes,
  useSlamJapes
} from '@renderer/hooks/japes'
import { useCharge, useDiddy, useHighGrab } from '@renderer/hooks/kongs'
import JapesCheck from '../JapesCheck'

const DiddyBananas: React.FC = () => {
  const inStage = usePlayJapes()
  const canSlam = useSlamJapes()
  const diddy = useDiddy()
  const japesRambi = useJapesRambi()
  const japesMine = useJapesMine()
  const japesSide = useJapesSideArea()
  const highGrab = useHighGrab()
  const charge = useCharge()
  return (
    <>
      <JapesCheck
        id={1010}
        name="Japes Diddy Caged Banana"
        region="Japes Hillside"
        canGetLogic={japesRambi && diddy && canSlam}
      />
      <JapesCheck
        id={1011}
        name="Japes Diddy Mountain"
        region="Japes Hillside"
        canGetLogic={japesMine && canSlam}
      />
      <JapesCheck
        id={1012}
        name="Japes Diddy Tunnel"
        region="Japes Lowlands"
        canGetLogic={inStage && japesSide}
      />
      <ToughGoldenBanana>
        <JapesCheck
          id={1013}
          name="Japes Diddy Minecarts"
          region="Japes Caves And Mines"
          canGetLogic={japesMine && canSlam && charge}
          canGetBreak={japesMine && highGrab}
        />
      </ToughGoldenBanana>
    </>
  )
}

export default DiddyBananas
