import { useShallow } from 'zustand/react/shallow'

import KasplatPool from '@renderer/components/pools/Kasplats'
import { useJapesUnderground, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  const under = useJapesUnderground()
  const [dk, diddy, tiny, twirl, pineapple, vine] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.tiny,
      state.moves.twirl,
      state.moves.pineapple,
      state.moves.vine
    ])
  )

  return (
    <>
      <JapesCheck
        id={1050}
        name="Japes Kasplat Hive Tunnel Lower"
        region="Hive Tunnel Area"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1051}
        name="Japes Kasplat Near Painting Room"
        region="Stormy Tunnel Area"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1052}
        name="Japes Kasplat By Lanky Slope Bonus"
        region="Stormy Tunnel Area"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1053}
        name="Japes Kasplat Hive Tunnel Upper"
        region="Hive Tunnel Area"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1054}
        name="Japes Kasplat Underground"
        region="Japes Caves And Mines"
        canGetLogic={under && pineapple && vine}
        canGetBreak={under && (dk || (tiny && twirl) || ((tiny || diddy) && vine))}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()

  return (
    <>
      <JapesCheck id={1250} name="Japes Kasplat Location #1" canGetLogic={inStage && anyKong} />
      <JapesCheck id={1251} name="Japes Kasplat Location #2" canGetLogic={inStage && anyKong} />
      <JapesCheck id={1252} name="Japes Kasplat Location #3" canGetLogic={inStage && anyKong} />
      <JapesCheck id={1253} name="Japes Kasplat Location #4" canGetLogic={inStage && anyKong} />
      <JapesCheck id={1254} name="Japes Kasplat Location #5" canGetLogic={inStage && anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
