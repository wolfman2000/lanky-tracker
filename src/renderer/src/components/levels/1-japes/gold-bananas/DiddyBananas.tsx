import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useDiddyCagedGb,
  useDiddyMinecartGb,
  useDiddyMountainGb,
  useDiddyTunnelGb
} from '@renderer/hooks/japes'
import JapesCheck from '../JapesCheck'

const DiddyBananas: React.FC = () => {
  const mineGb = useDiddyMinecartGb()
  return (
    <>
      <JapesCheck
        id={1010}
        name="Japes Diddy Caged Banana"
        region="Japes Hillside"
        canGetLogic={useDiddyCagedGb()}
      />
      <JapesCheck
        id={1011}
        name="Japes Diddy Mountain"
        region="Japes Hillside"
        canGetLogic={useDiddyMountainGb()}
      />
      <JapesCheck
        id={1012}
        name="Japes Diddy Tunnel"
        region="Japes Lowlands"
        canGetLogic={useDiddyTunnelGb()}
      />
      <ToughGoldenBanana>
        <JapesCheck
          id={1013}
          name="Japes Diddy Minecarts"
          region="Japes Caves And Mines"
          canGetLogic={mineGb.in}
          canGetBreak={mineGb.out}
        />
      </ToughGoldenBanana>
    </>
  )
}

export default DiddyBananas
