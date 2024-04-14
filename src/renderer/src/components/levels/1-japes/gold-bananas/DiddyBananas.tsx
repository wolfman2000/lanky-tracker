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
        name="Japes Diddy Timed Caged Banana"
        region="Japes Hillside"
        canGetLogic={useDiddyCagedGb()}
      />
      <JapesCheck
        id={1011}
        name="Japes Diddy Top of Mountain"
        region="Japes Hillside"
        canGetLogic={useDiddyMountainGb()}
      />
      <JapesCheck
        id={1012}
        name="Japes Diddy Peanut Tunnel"
        region="Japes Lowlands"
        canGetLogic={useDiddyTunnelGb()}
      />
      <ToughGoldenBanana>
        <JapesCheck
          id={1013}
          name="Japes Diddy Minecart"
          region="Japes Caves And Mines"
          canGetLogic={mineGb.in}
          canGetBreak={mineGb.out}
        />
      </ToughGoldenBanana>
    </>
  )
}

export default DiddyBananas
