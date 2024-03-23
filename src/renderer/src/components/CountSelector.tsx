import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import { MouseEvent, WheelEvent } from 'react'

type CountSelectorProps = {
  imgUrl: string
  storeKey: string
  maxValue: number
}

const CountSelector: React.FC<CountSelectorProps> = (props) => {
  const { storeKey, imgUrl, maxValue } = props
  const [num, setCount] = useDonkStore(useShallow((state) => [state[storeKey], state.setCount]))

  const clamp = (num: number): number => Math.min(Math.max(num, 0), maxValue)

  const nextCount = (num: number): number => clamp(num + 1)

  const prevCount = (num: number): number => clamp(num - 1)

  const handleNextLevel = (): void => {
    setCount(storeKey, nextCount(num))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setCount(storeKey, prevCount(num))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setCount(storeKey, nextCount(num))
    } else {
      setCount(storeKey, prevCount(num))
    }
  }

  return (
    <div
      className="count-icon"
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
