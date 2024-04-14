import CratePool from '@renderer/components/pools/Crates'
import { useDkBarnGb, useForestNight, useForestOwl, useGeneralThing } from '@renderer/hooks/forest'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from '../1-japes/JapesCheck'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  const night = useForestNight()
  const barn = useDkBarnGb()
  return (
    <>
      <ForestCheck
        id={5060}
        name="Forest Crate: Behind Dark Attic"
        region="Forest Mills"
        canGetLogic={useGeneralThing()}
      />
      <ForestCheck
        id={5061}
        name="Forest Crate: Near Owl Tree"
        region="Owl Tree"
        canGetLogic={useForestOwl()}
      />
      <ForestCheck
        id={5062}
        name="Forest Crate: Near Thrornvine Barn"
        region="Forest Mills"
        canGetLogic={night.in}
        canGetBreak={night.out}
      />
      <ForestCheck
        id={5063}
        name="Forest Crate: In Thornvine Barn"
        region="Forest Mills"
        canGetLogic={barn.in}
        canGetBreak={barn.out}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <JapesCheck id={1260} name="Japes Crate Location #1 (maybe)" canGetLogic={thing} />
      <JapesCheck id={1261} name="Japes Crate Location #2 (maybe)" canGetLogic={thing} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
