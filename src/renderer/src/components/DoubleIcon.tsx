import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '../store'

type DoubleIconProps = {
  storeLeft: string
  storeRight: string
  imgLeft: string
  imgRight: string
  imgBoth: string
}

const DoubleIcon: React.FC<DoubleIconProps> = (props) => {
  const [left, right, setItem] = useDonkStore(
    useShallow((state) => [state[props.storeLeft], state[props.storeRight], state.setItem])
  )
  let url = props.imgBoth
  if (left && !right) {
    url = props.imgLeft
  } else if (!left && right) {
    url = props.imgRight
  }
  return (
    <div className="double-icon">
      <img
        width={24}
        height={24}
        src={url}
        style={{ filter: `grayscale(${left || right ? '0' : '1'})` }}
        onClick={() => setItem(props.storeLeft, !left)}
        onAuxClick={(e) => {
          e.preventDefault()
          setItem(props.storeRight, !right)
        }}
        onContextMenu={(e) => e.preventDefault()}
      />{' '}
    </div>
  )
}

export default DoubleIcon
