import { useDiddyStorageGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const StorageBarrel: React.FC = () => {
  const storageGb = useDiddyStorageGb()
  return (
    <FactoryCheck
      id={3012}
      name="Factory Diddy Storage Room Barrel"
      region="Storage And Arcade"
      canGetLogic={storageGb.in}
      canGetBreak={storageGb.out}
    />
  )
}

export default StorageBarrel
