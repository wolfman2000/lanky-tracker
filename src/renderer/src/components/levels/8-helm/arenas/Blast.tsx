import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useHelmMachine } from '@renderer/hooks/helm'
import { useRocket } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const BlastArena: React.FC = () => {
  const helmMachine = useHelmMachine()
  const rocket = useRocket()
  return (
    <ArenaPool>
      <VanillaArena>
        <HelmCheck
          id={8090}
          name="Helm Arena (Top of Blast-o-Matic)"
          canGetLogic={helmMachine && rocket}
        />
      </VanillaArena>
    </ArenaPool>
  )
}

export default BlastArena
