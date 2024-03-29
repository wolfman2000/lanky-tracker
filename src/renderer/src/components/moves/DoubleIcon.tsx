import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '../../store'

type DoubleIconProps = {
  storeLeft: string
  storeRight: string
  imgLeft: string
  imgRight: string
  imgBoth: string
  prefix: string
  setItem: (item: string, val: boolean) => void
}

const DoubleIcon: React.FC<DoubleIconProps> = (props) => {
  const [left, right] = useDonkStore(
    useShallow((state) => [
      state[props.prefix][props.storeLeft],
      state[props.prefix][props.storeRight]
    ])
  )
  let url = props.imgBoth
  if (left && !right) {
    url = props.imgLeft
  } else if (!left && right) {
    url = props.imgRight
  }
  return (
    <div className={`double-icon ${props.prefix}-${props.storeLeft}`}>
      <img
        width={24}
        height={24}
        src={url}
        style={{ filter: `grayscale(${left || right ? '0' : '1'})` }}
        onClick={() => props.setItem(props.storeLeft, !left)}
        onContextMenu={(e) => {
          e.preventDefault()
          props.setItem(props.storeRight, !right)
        }}
      />{' '}
    </div>
  )
}

export default DoubleIcon
