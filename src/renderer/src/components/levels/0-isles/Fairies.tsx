import FairyPool from '@renderer/components/pools/Fairies'
import {
  useFactoryFairy,
  useForestFairy,
  useGeneralFairy,
  useKremFairy
} from '@renderer/hooks/isles'
import { useShuffleFairies } from '@renderer/hooks/settings'
import IslesCheck from './IslesCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <IslesCheck
        id={80}
        name="Isles Outer Fairy"
        region="Outer Isles"
        canGetLogic={useGeneralFairy()}
      />
      <IslesCheck
        id={81}
        name="Isles Factory Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={useFactoryFairy()}
      />
      <IslesCheck
        id={82}
        name="Isles Forest Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={useForestFairy()}
      />
      <IslesCheck id={83} name="Isles Krem Fairy" region="Krem Isle" canGetLogic={useKremFairy()} />
    </>
  )
}

const Shuffled: React.FC = () => {
  const fairy = useGeneralFairy()
  return (
    <>
      <IslesCheck id={280} name="Isles Fairy Location #1" canGetLogic={fairy} />
      <IslesCheck id={281} name="Isles Fairy Location #2" canGetLogic={fairy} />
      <IslesCheck id={282} name="Isles Fairy Location #3" canGetLogic={fairy} />
      <IslesCheck id={283} name="Isles Fairy Location #4" canGetLogic={fairy} />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
