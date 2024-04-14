import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralTest, useGeneralThing, useProductionKasplat } from '@renderer/hooks/factory'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <FactoryCheck
        id={3050}
        name="Factory Kasplat Upper Production Pipe"
        region="Production Room"
        canGetLogic={useProductionKasplat()}
      />
      <FactoryCheck
        id={3051}
        name="Factory Kasplat Production Floor"
        region="Production Room"
        canGetLogic={useGeneralThing()}
      />
      <FactoryCheck
        id={3052}
        name="Factory Kasplat R&D"
        region="R&D Area"
        canGetLogic={useGeneralTest()}
      />
      <FactoryCheck
        id={3053}
        name="Factory Kasplat Pole to Arcade"
        region="Storage And Arcade"
        canGetLogic={useGeneralThing()}
      />
      <FactoryCheck
        id={3054}
        name="Factory Kasplat Block Tower"
        region="Testing Area"
        canGetLogic={useGeneralTest()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const kasplat = useGeneralThing()
  return (
    <>
      <FactoryCheck id={3250} name="Factory Kasplat Location #1" canGetLogic={kasplat} />
      <FactoryCheck id={3251} name="Factory Kasplat Location #2" canGetLogic={kasplat} />
      <FactoryCheck id={3252} name="Factory Kasplat Location #3" canGetLogic={kasplat} />
      <FactoryCheck id={3253} name="Factory Kasplat Location #4" canGetLogic={kasplat} />
      <FactoryCheck id={3254} name="Factory Kasplat Location #5" canGetLogic={kasplat} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
