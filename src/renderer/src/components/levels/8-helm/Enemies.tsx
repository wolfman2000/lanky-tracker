import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useHelmDoors, useHelmEnter, useHelmMachine } from '@renderer/hooks/helm'
import {
  useAnyKong,
  useBongos,
  useGuitar,
  useRocket,
  useSax,
  useTriangle,
  useTrombone
} from '@renderer/hooks/kongs'
import HelmCheck from './HelmCheck'

const EnemyLocations: React.FC = () => {
  const helmEntry = useHelmEnter()
  const helmMachine = useHelmMachine()
  const helmDoors = useHelmDoors()
  const bongos = useBongos()
  const guitar = useGuitar()
  const rocket = useRocket()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  const anyKong = useAnyKong()
  const klump = useDefeatKlump()
  return (
    <>
      <HelmCheck id={8300} name="Helm Enemy: Start 0" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8301} name="Helm Enemy: Start 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8302} name="Helm Enemy: Hill" canGetLogic={helmEntry && anyKong && klump} />
      <HelmCheck
        id={8303}
        name="Helm Enemy: Switch Room 0"
        canGetLogic={helmEntry && anyKong && klump}
      />
      <HelmCheck id={8304} name="Helm Enemy: Switch Room 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8305} name="Helm Enemy: Mini Room 0" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8306} name="Helm Enemy: Mini Room 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8307} name="Helm Enemy: Mini Room 2" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8308} name="Helm Enemy: Mini Room 3" canGetLogic={helmEntry && anyKong} />
      <HelmCheck
        id={8309}
        name="Helm Enemy: DK Room"
        canGetLogic={helmMachine.in && bongos}
        canGetBreak={helmMachine.out && bongos}
      />
      <HelmCheck
        id={8310}
        name="Helm Enemy: Chunky Room 0"
        canGetLogic={helmMachine.in && triangle}
        canGetBreak={helmMachine.out && triangle}
      />
      <HelmCheck
        id={8311}
        name="Helm Enemy: Chunky Room 1"
        canGetLogic={helmMachine.in && triangle}
        canGetBreak={helmMachine.out && triangle}
      />
      <HelmCheck
        id={8312}
        name="Helm Enemy: Tiny Room"
        canGetLogic={helmMachine.in && sax}
        canGetBreak={helmMachine.out && sax && klump}
      />
      <HelmCheck
        id={8313}
        name="Helm Enemy: Lanky Room 0"
        canGetLogic={helmMachine.in && trombone}
        canGetBreak={helmMachine.out && trombone && klump}
      />
      <HelmCheck
        id={8314}
        name="Helm Enemy: Lanky Room 1"
        canGetLogic={helmMachine.in && trombone}
        canGetBreak={helmMachine.out && trombone}
      />
      <HelmCheck
        id={8315}
        name="Helm Enemy: Diddy Room 0"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
      <HelmCheck
        id={8316}
        name="Helm Enemy: Diddy Room 1"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
      <HelmCheck
        id={8317}
        name="Helm Enemy: Nav Room Left"
        canGetLogic={helmDoors.in && anyKong}
        canGetBreak={helmDoors.out && anyKong}
      />
      <HelmCheck
        id={8318}
        name="Helm Enemy: Nav Room Right"
        canGetLogic={helmDoors.in && anyKong}
        canGetBreak={helmDoors.out && anyKong}
      />
    </>
  )
}

export default EnemyLocations
