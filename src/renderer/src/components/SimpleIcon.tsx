import useDonkStore from '../store'

type SimpleIconProps = {
  storeKey: string
  imgUrl: string
}

const SimpleIcon: React.FC<SimpleIconProps> = (props) => {
  const value: boolean = useDonkStore((state) => state[props.storeKey])
  const setItem = useDonkStore((state) => state.setItem)
  return (
    <div
      className={`simple-icon ${value ? 'have' : 'have-not'}`}
      onClick={() => setItem(props.storeKey, !value)}
    >
      <img
        width={24}
        height={24}
        src={props.imgUrl}
        style={{ filter: `grayscale(${value ? '0' : '1'})` }}
      />
      <span>{value ? '✓' : '✗'}</span>
    </div>
  )
}

export default SimpleIcon
