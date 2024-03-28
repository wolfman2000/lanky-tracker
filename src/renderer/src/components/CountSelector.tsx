import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'

type CountSelectorProps = {
  imgUrl: string
  storeKey: string
  prefix: string
  setCount: (item: string, val: number) => void
  maxValue: number
}

const CountSelector: React.FC<CountSelectorProps> = (props) => {
  const { storeKey, imgUrl, maxValue } = props
  const [num] = useDonkStore(useShallow((state) => [state[props.prefix][storeKey]]))

  const clamp = (num: number): number => Math.min(Math.max(num, 0), maxValue)

  const nextCount = (num: number): number => clamp(num + 1)

  const prevCount = (num: number): number => clamp(num - 1)

  const handleNextLevel = (): void => {
    props.setCount(storeKey, nextCount(num))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    props.setCount(storeKey, prevCount(num))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      props.setCount(storeKey, nextCount(num))
    } else {
      props.setCount(storeKey, prevCount(num))
    }
  }

  return (
    <div
      className={`count-icon ${props.prefix}-${props.storeKey}`}
      onClick={handleNextLevel}
      onAuxClick={handlePrevLevel}
      onWheel={handleWheel}
    >
      <img height={24} src={imgUrl} style={{ filter: `grayscale(${num != 0 ? '0' : '1'})` }} />
      <span>{num}</span>
    </div>
  )
}

export default CountSelector
