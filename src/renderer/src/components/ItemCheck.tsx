import useDonkStore from '@renderer/store'
import { Level, SelectableRegionValues } from '@renderer/store/common'

export type LevelCheckProps = {
  id: number
  name: string
  region: SelectableRegionValues
  canGetLogic: boolean
  canGetBreak?: boolean
}

type ItemCheckProps = LevelCheckProps & {
  level: Level
  done?: boolean
}

const ItemCheck: React.FC<ItemCheckProps> = (props) => {
  const { id, name, region, done, canGetLogic } = props
  let { canGetBreak } = props
  const [setCheck, foolish] = useDonkStore((state) => [state.setCheck, state.foolish])
  const foolishValues = Object.values(foolish)
  const isFoolish = foolishValues.some((f) => f === region)
  if (canGetBreak === undefined) {
    canGetBreak = canGetLogic
  }
  let logicState = 'not-available'
  if (canGetLogic) {
    logicState = 'available'
  } else if (canGetBreak) {
    logicState = 'logic-break'
  }

  const rowNames: string[] = ['check-row']
  if (done) {
    rowNames.push('checked')
  }
  if (isFoolish) {
    rowNames.push('foolish')
  }
  const classNames = rowNames.join(' ')

  return (
    <>
      <div className={classNames}>
        <span>{name}</span>
        <span>&nbsp;</span>
        <span className={logicState}>⬤</span>
        <span>&nbsp;</span>
      </div>
      <div className={classNames}>{region}</div>
      <div className={classNames}>
        <input
          type="checkbox"
          defaultChecked={!!done}
          onChange={(e) => setCheck(id, e.target.checked)}
        />
      </div>
    </>
  )
}

export default ItemCheck
