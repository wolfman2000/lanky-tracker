import KasplatPool from '@renderer/components/pools/Kasplats'
import { useForestNight, useForestOwl, usePlayForest } from '@renderer/hooks/forest'
import { useAnyGun, useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const anyGun = useAnyGun()
  const anyKong = useAnyKong()
  const owlTree = useForestOwl()
  return (
    <>
      <ForestCheck
        id={5050}
        name="Forest Kasplat Behind DK's Barn"
        region="Forest Mills"
        canGetLogic={inStage && night.in && anyGun}
        canGetBreak={inStage && (night.in || night.out)}
      />
      <ForestCheck
        id={5051}
        name="Forest Kasplat Inside Giant Mushroom"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5052}
        name="Forest Kasplat Under Owl Tree"
        region="Owl Tree"
        canGetLogic={owlTree && anyKong}
      />
      <ForestCheck
        id={5053}
        name="Forest Kasplat Low Mushroom Exterior"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5054}
        name="Forest Kasplat Mushroom Night Door"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayForest()

  return (
    <>
      <ForestCheck id={5250} name="Forest Kasplat Location #1" canGetLogic={inStage && anyKong} />
      <ForestCheck id={5251} name="Forest Kasplat Location #2" canGetLogic={inStage && anyKong} />
      <ForestCheck id={5252} name="Forest Kasplat Location #3" canGetLogic={inStage && anyKong} />
      <ForestCheck id={5253} name="Forest Kasplat Location #4" canGetLogic={inStage && anyKong} />
      <ForestCheck id={5254} name="Forest Kasplat Location #5" canGetLogic={inStage && anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const locations = useShuffleKasplats() ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations
