import useDonkStore from '../../store'

type SimpleIconProps = {
  storeKey: string
  imgUrl: string
  prefix: string
  updateItem: (item: string, val: boolean) => void
}

const SimpleIcon: React.FC<SimpleIconProps> = (props) => {
  const value: boolean = useDonkStore((state) => state[props.prefix][props.storeKey])
  return (
    <div
      className={`simple-icon ${props.prefix}-${props.storeKey} ${value ? 'have' : 'have-not'}`}
      onClick={() => props.updateItem(props.storeKey, !value)}
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
