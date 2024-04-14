import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useBarnKasplat,
  useGeneralThing,
  useMushExteriorKasplat,
  useMushInteriorKasplat,
  useNightKasplat,
  useOwlKasplat
} from '@renderer/hooks/forest'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  const barn = useBarnKasplat()
  return (
    <>
      <ForestCheck
        id={5050}
        name="Forest Kasplat: Behind DK's Barn"
        region="Forest Mills"
        canGetLogic={barn.in}
        canGetBreak={barn.out}
      />
      <ForestCheck
        id={5051}
        name="Forest Kasplat: Inside Giant Mushroom"
        region="Giant Mushroom Insides"
        canGetLogic={useMushInteriorKasplat()}
      />
      <ForestCheck
        id={5052}
        name="Forest Kasplat: Under Owl Tree"
        region="Owl Tree"
        canGetLogic={useOwlKasplat()}
      />
      <ForestCheck
        id={5053}
        name="Forest Kasplat: Low Mushroom Exterior"
        region="Giant Mushroom Exterior"
        canGetLogic={useMushExteriorKasplat()}
      />
      <ForestCheck
        id={5054}
        name="Forest Kasplat: Mushroom Night Door"
        region="Giant Mushroom Exterior"
        canGetLogic={useNightKasplat()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()

  return (
    <>
      <ForestCheck id={5250} name="Forest Kasplat Location #1" canGetLogic={thing} />
      <ForestCheck id={5251} name="Forest Kasplat Location #2" canGetLogic={thing} />
      <ForestCheck id={5252} name="Forest Kasplat Location #3" canGetLogic={thing} />
      <ForestCheck id={5253} name="Forest Kasplat Location #4" canGetLogic={thing} />
      <ForestCheck id={5254} name="Forest Kasplat Location #5" canGetLogic={thing} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
