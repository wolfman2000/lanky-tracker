import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useHelmMachine } from '@renderer/hooks/helm'
import {
  useBongos,
  useGuitar,
  useRocket,
  useSax,
  useTriangle,
  useTrombone
} from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const HelmMachineEnemies: React.FC = () => {
  const helmMachine = useHelmMachine()
  const bongos = useBongos()
  const guitar = useGuitar()
  const rocket = useRocket()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  const klump = useDefeatKlump()
  return (
    <>
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
    </>
  )
}

export default HelmMachineEnemies
