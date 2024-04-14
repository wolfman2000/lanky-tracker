import FairyPool from '@renderer/components/pools/Fairies'
import { useDartFairy, useGeneralFairy, useNumberFairy } from '@renderer/hooks/factory'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <FactoryCheck
        id={3080}
        name="Factory Fairy Counting"
        region="Testing Area"
        canGetLogic={useNumberFairy()}
      />
      <FactoryCheck
        id={3081}
        name="Factory Fairy Dartboard"
        region="Testing Area"
        canGetLogic={useDartFairy()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <>
      <FactoryCheck id={3280} name="Factory Fairy Location #1" canGetLogic={thing} />
      <FactoryCheck id={3281} name="Factory Fairy Location #2" canGetLogic={thing} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
