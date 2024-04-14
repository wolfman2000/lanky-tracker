import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, usePunch } from '@renderer/hooks/kongs'
import FactoryCheck from './FactoryCheck'

const EnemyLocations: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const punch = usePunch()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  return (
    <>
      <FactoryCheck
        id={3300}
        name="Factory Enemy: Shops 0"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3301}
        name="Factory Enemy: Shops 1"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3302}
        name="Factory Enemy: Lobby Left"
        region="Factory Start"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3303}
        name="Factory Enemy: Lobby Right"
        region="Factory Start"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3304}
        name="Factory Enemy: Storage Room"
        region="Storage And Arcade"
        canGetLogic={inStage && zinger}
      />
      <FactoryCheck
        id={3305}
        name="Factory Enemy: Block Tower 0"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3306}
        name="Factory Enemy: Block Tower 1"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3307}
        name="Factory Enemy: Block Tower 2"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3308}
        name="Factory Enemy: Tunnel to Hatch"
        region="Factory Start"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3309}
        name="Factory Enemy: Tunnel to Prod 0"
        region="Production Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3310}
        name="Factory Enemy: Tunnel to Prod 1"
        region="Production Room"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3311}
        name="Factory Enemy: Tunnel to Block Tower"
        region="Testing Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3312}
        name="Factory Enemy: Tunnel to Race 0"
        region="R&D Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3313}
        name="Factory Enemy: Tunnel to Race 1"
        region="R&D Area"
        canGetLogic={testing && zinger}
      />
      <FactoryCheck
        id={3314}
        name="Factory Enemy: Low Warp 4"
        region="Production Room"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3315}
        name="Factory Enemy: Diddy Switch"
        region="Production Room"
        canGetLogic={inStage && zinger}
      />
      <FactoryCheck
        id={3316}
        name="Factory Enemy: To Block Tower Tunnel"
        region="Testing Area"
        canGetLogic={inStage && zinger}
      />
      <FactoryCheck
        id={3317}
        name="Factory Enemy: Dark Room 0"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && zinger}
      />
      <FactoryCheck
        id={3318}
        name="Factory Enemy: Dark Room 1"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && zinger}
      />
      {/* Diddy Charge gauntlet enemies used to be here.*/}
    </>
  )
}

export default EnemyLocations
