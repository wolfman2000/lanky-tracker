import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestOwl } from '@renderer/hooks/forest'
import { useMini, useSax } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const OwlEnemies: React.FC = () => {
  const owlTree = useForestOwl()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const mini = useMini()
  const sax = useSax()
  return (
    <DropPool>
      <ForestCheck
        id={5327}
        name="Forest Enemy: Yellow Tunnel 1"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5328}
        name="Forest Enemy: Yellow Tunnel 2"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5329}
        name="Forest Enemy: Yellow Tunnel 3"
        region="Owl Tree"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5300}
        name="Forest Enemy: Hollow Tree 0"
        region="Owl Tree"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5301}
        name="Forest Enemy: Hollow Tree 1"
        region="Owl Tree"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5302}
        name="Forest Enemy: Hollow Tree Entrance"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5303}
        name="Forest Enemy: Tree Melon Crate 0"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5304}
        name="Forest Enemy: Tree Melon Crate 1"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5305}
        name="Forest Enemy: Tree Melon Crate 2"
        region="Owl Tree"
        canGetLogic={owlTree && zinger}
      />
      <ForestCheck
        id={5340}
        name="Forest Enemy: Anthill Gauntlet 0"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5341}
        name="Forest Enemy: Anthill Gauntlet 1"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5342}
        name="Forest Enemy: Anthill Gauntlet 2"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5343}
        name="Forest Enemy: Anthill Gauntlet 3"
        region="Owl Tree"
        canGetLogic={owlTree && mini && sax}
      />
    </DropPool>
  )
}

export default OwlEnemies
