import { useFactoryProductionTop, useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from './FactoryCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KasplatPool from '../pools/Kasplats'

const Vanilla: React.FC = () => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionTop()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()

  return (
    <>
      <FactoryCheck
        id={3050}
        name="Factory Kasplat Upper Production Pipe"
        region="Production Room"
        canGetLogic={production && anyKong}
      />
      <FactoryCheck
        id={3051}
        name="Factory Kasplat Production Floor"
        region="Production Room"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3052}
        name="Factory Kasplat R&D"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3053}
        name="Factory Kasplat Pole to Arcade"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3054}
        name="Factory Kasplat Block Tower"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayFactory()

  return (
    <>
      <FactoryCheck id={3250} name="Factory Kasplat Location #1" canGetLogic={inStage && anyKong} />
      <FactoryCheck id={3251} name="Factory Kasplat Location #2" canGetLogic={inStage && anyKong} />
      <FactoryCheck id={3252} name="Factory Kasplat Location #3" canGetLogic={inStage && anyKong} />
      <FactoryCheck id={3253} name="Factory Kasplat Location #4" canGetLogic={inStage && anyKong} />
      <FactoryCheck id={3254} name="Factory Kasplat Location #5" canGetLogic={inStage && anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.shuffleKasplats))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
