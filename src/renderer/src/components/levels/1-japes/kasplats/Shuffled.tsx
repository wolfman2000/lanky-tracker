import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing } from '@renderer/hooks/japes'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
  const kasplat = useGeneralThing()
  return (
    <KasplatPool>
      <JapesCheck id={1250} name="Japes Kasplat Location #1" canGetLogic={kasplat} />
      <JapesCheck id={1251} name="Japes Kasplat Location #2" canGetLogic={kasplat} />
      <JapesCheck id={1252} name="Japes Kasplat Location #3" canGetLogic={kasplat} />
      <JapesCheck id={1253} name="Japes Kasplat Location #4" canGetLogic={kasplat} />
      <JapesCheck id={1254} name="Japes Kasplat Location #5" canGetLogic={kasplat} />
    </KasplatPool>
  )
}
const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
