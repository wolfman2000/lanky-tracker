import {
  useDiddyBlockGb,
  useDiddyEnemyGb,
  useDiddyProductionGb,
  useDiddyStorageGb
} from '@renderer/hooks/factory'
import FactoryCheck from '../FactoryCheck'

const DiddyBananas: React.FC = () => {
  const blockGb = useDiddyBlockGb()
  const storageGb = useDiddyStorageGb()
  const prodGb = useDiddyProductionGb()
  return (
    <>
      <FactoryCheck
        id={3010}
        name="Factory Diddy Block Tower"
        region="Testing Area"
        canGetLogic={blockGb.in}
        canGetBreak={blockGb.out}
      />
      <FactoryCheck
        id={3011}
        name="Factory Diddy R&D"
        region="R&D Area"
        canGetLogic={useDiddyEnemyGb()}
      />
      <FactoryCheck
        id={3012}
        name="Factory Diddy Chunky Room Barrel"
        region="Storage And Arcade"
        canGetLogic={storageGb.in}
        canGetBreak={storageGb.out}
      />
      <FactoryCheck
        id={3013}
        name="Factory Diddy Production Room"
        region="Production Room"
        canGetLogic={prodGb.in}
        canGetBreak={prodGb.out}
      />
    </>
  )
}

export default DiddyBananas
