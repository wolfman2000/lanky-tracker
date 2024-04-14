import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import { useHelmMachine } from '@renderer/hooks/helm'
import {
  useBongos,
  useGuitar,
  useRocket,
  useSax,
  useTriangle,
  useTrombone
} from '@renderer/hooks/kongs'
import HelmCheck from './HelmCheck'

const MedalLocations: React.FC = () => {
  const helmMachine = useHelmMachine()
  const bongos = useBongos()
  const guitar = useGuitar()
  const rocket = useRocket()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  return (
    <BananaMedalPool>
      <HelmCheck id={8100} name="Helm Donkey Banana Medal" canGetLogic={helmMachine && bongos} />
      <HelmCheck
        id={8101}
        name="Helm Diddy Banana Medal"
        canGetLogic={helmMachine && guitar && rocket}
      />
      <HelmCheck id={8102} name="Helm Lanky Banana Medal" canGetLogic={helmMachine && trombone} />
      <HelmCheck id={8103} name="Helm Tiny Banana Medal" canGetLogic={helmMachine && sax} />
      <HelmCheck id={8104} name="Helm Chunky Banana Medal" canGetLogic={helmMachine && triangle} />
    </BananaMedalPool>
  )
}

export default MedalLocations
