import { useShallow } from 'zustand/react/shallow'

import ItemCheck, { LevelCheckProps } from '@renderer/components/levels/ItemCheck'
import useDonkStore from '@renderer/store'

const CastleCheck: React.FC<LevelCheckProps> = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks))
  return (
    <>
      <ItemCheck
        id={props.id}
        name={props.name}
        level="Castle"
        region={props.region}
        canGetLogic={props.canGetLogic}
        canGetBreak={props.canGetBreak}
        done={checks[props.id]}
      />
    </>
  )
}

export default CastleCheck
