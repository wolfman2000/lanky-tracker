import DropPool from '@renderer/components/pools/Drops'
import { useCavesIgloo } from '@renderer/hooks/caves'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useBongos, useSax } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const IglooEnemies: React.FC = () => {
  const igloo = useCavesIgloo()
  const kosha = useDefeatKosha()
  const bongos = useBongos()
  const sax = useSax()
  return (
    <DropPool>
      <CavesCheck
        id={6309}
        name="Caves Enemy: DK Igloo Right"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha}
      />
      <CavesCheck
        id={6310}
        name="Caves Enemy: DK Igloo Left"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha}
      />
      <CavesCheck
        id={6316}
        name="Caves Enemy: Tiny Igloo Big"
        region="Igloo Area"
        canGetLogic={igloo && sax && kosha}
      />
    </DropPool>
  )
}
export default IglooEnemies
