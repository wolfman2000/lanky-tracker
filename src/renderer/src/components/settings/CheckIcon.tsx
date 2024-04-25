import { UiCollection } from '@renderer/store/common'
import useDonkStore from '../../store'

type CheckIconProps = {
  storeKey: keyof UiCollection
  prefix: string
  className?: string
  updateItem: (item: keyof UiCollection, val: boolean) => void
}

const CheckIcon: React.FC<CheckIconProps> = (props) => {
  const value: boolean = useDonkStore((state) => state[props.prefix][props.storeKey])
  const classes = `check-icon ${props.prefix}-${props.storeKey} ${value ? 'have' : 'have-not'} ${props.className}`
  return (
    <div className={classes} onClick={() => props.updateItem(props.storeKey, !value)}>
      <span>{value ? '✓' : '✗'}</span>
    </div>
  )
}

export default CheckIcon
