import useDonkStore from '../store'

import keyIcon from '../assets/images/key.png'

type SimpleIconProps = {
  keyNum: number
}

const SimpleKey: React.FC<SimpleIconProps> = (props) => {
  const value: boolean = useDonkStore((state) => state['key' + props.keyNum])
  const setKey = useDonkStore((state) => state.setKey)
  return (
    <div>
      <img
        height={24}
        src={keyIcon}
        style={{ filter: `grayscale(${value ? '0' : '1'})` }}
        onClick={() => setKey(props.keyNum, !value)}
      />
    </div>
  )
}

export default SimpleKey
