import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import ItemCheck, { LevelCheckProps } from '../ItemCheck'

const JapesCheck: React.FC<LevelCheckProps> = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks))
  return (
    <>
      <ItemCheck
        id={props.id}
        name={props.name}
        level="Japes"
        region={props.region ?? ''}
        canGetLogic={props.canGetLogic}
        canGetBreak={props.canGetBreak}
        done={checks[props.id]}
      />
    </>
  )
}

export default JapesCheck
