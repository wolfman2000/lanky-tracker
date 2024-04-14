import KasplatPool from '@renderer/components/pools/Kasplats'
import { useArena, useChunkyUndergroundGb, useGateKasplat } from '@renderer/hooks/japes'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  const kasplat = useGateKasplat()
  const under = useChunkyUndergroundGb()
  return (
    <>
      <JapesCheck
        id={1050}
        name="Japes Kasplat: Hive Tunnel Lower"
        region="Hive Tunnel Area"
        canGetLogic={kasplat}
      />
      <JapesCheck
        id={1051}
        name="Japes Kasplat: Near Painting Room"
        region="Stormy Tunnel Area"
        canGetLogic={kasplat}
      />
      <JapesCheck
        id={1052}
        name="Japes Kasplat: By Lanky Slope Bonus"
        region="Stormy Tunnel Area"
        canGetLogic={kasplat}
      />
      <JapesCheck
        id={1053}
        name="Japes Kasplat: Hive Tunnel Upper"
        region="Hive Tunnel Area"
        canGetLogic={kasplat}
      />
      <JapesCheck
        id={1054}
        name="Japes Kasplat: Underground"
        region="Japes Caves And Mines"
        canGetLogic={under.in}
        canGetBreak={under.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const kasplat = useArena()
  return (
    <>
      <JapesCheck id={1250} name="Japes Kasplat Location #1" canGetLogic={kasplat} />
      <JapesCheck id={1251} name="Japes Kasplat Location #2" canGetLogic={kasplat} />
      <JapesCheck id={1252} name="Japes Kasplat Location #3" canGetLogic={kasplat} />
      <JapesCheck id={1253} name="Japes Kasplat Location #4" canGetLogic={kasplat} />
      <JapesCheck id={1254} name="Japes Kasplat Location #5" canGetLogic={kasplat} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
