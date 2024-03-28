import { usePlayHelm } from '@renderer/hooks/helm'
import { useIslesHelmEntry, useIslesKremTop, useIslesUpper } from '@renderer/hooks/isles'
import {
  useBoulderTech,
  useHunky,
  usePineapple,
  useSax,
  useSlam,
  useTriangle,
  useTwirl,
  useVine
} from '@renderer/hooks/kongs'
import IslesCheck from '../IslesCheck'

const ChunkyBananas: React.FC = () => {
  const pineapple = usePineapple()
  const boulderTech = useBoulderTech()
  const triangle = useTriangle()
  const islesUpper = useIslesUpper()
  const islesKremTop = useIslesKremTop()
  const hunky = useHunky()
  const sax = useSax()
  const vine = useVine()
  const twirl = useTwirl()
  const slam = useSlam()
  const playHelm = usePlayHelm()
  const islesHelmEntry = useIslesHelmEntry()
  return (
    <>
      <IslesCheck
        id={40}
        name="Isles Chunky Caged Banana"
        region="Main Isle"
        canGetLogic={pineapple}
      />
      <IslesCheck
        id={41}
        name="Isles Chunky Instrument Pad"
        region="Main Isle"
        canGetLogic={islesUpper && boulderTech && triangle}
      />
      <IslesCheck
        id={42}
        name="Isles Chunky Pound The X"
        region="Outer Isles"
        canGetLogic={islesKremTop && sax && hunky && slam}
      />
      <IslesCheck
        id={43}
        name="Isles Chunky Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={playHelm && islesHelmEntry && vine}
        canGetBreak={playHelm && islesHelmEntry && twirl}
      />
    </>
  )
}

export default ChunkyBananas
