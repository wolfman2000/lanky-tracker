import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, usePaintingFairy, useRambiFairy } from '@renderer/hooks/japes'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  const painting = usePaintingFairy()
  return (
    <>
      <JapesCheck
        id={1080}
        name="Japes Fairy (Rambi Door Pool)"
        region="Stormy Tunnel Area"
        canGetLogic={useRambiFairy()}
      />
      <JapesCheck
        id={1081}
        name="Japes Fairy (Painting Room)"
        region="Japes Caves And Mines"
        canGetLogic={painting.in}
        canGetBreak={painting.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  return (
    <>
      <JapesCheck id={1280} name="Japes Fairy Location #1" canGetLogic={useGeneralFairy()} />
      <JapesCheck id={1281} name="Japes Fairy Location #2" canGetLogic={useGeneralFairy()} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
