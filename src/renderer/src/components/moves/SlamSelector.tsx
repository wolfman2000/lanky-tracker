import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import slamIcon from '../../assets/images/slam1.png'
import superIcon from '../../assets/images/slam2.png'
import duperIcon from '../../assets/images/slam3.png'

import { MouseEvent, WheelEvent } from 'react'

const slamToIcon = (num: number): string => {
  switch (num) {
    case 2:
      return superIcon
    case 3:
      return duperIcon
    default:
      return slamIcon
  }
}

const clamp = (num: number): number => Math.min(Math.max(num, 0), 3)

const nextSlam = (num: number): number => clamp(num + 1)

const prevSlam = (num: number): number => clamp(num - 1)

const SlamSelector: React.FC = () => {
  const [slam, setCount] = useDonkStore(useShallow((state) => [state.moves.slam, state.setSlam]))

  const handleNextLevel = (): void => {
    setCount('slam', nextSlam(slam))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setCount('slam', prevSlam(slam))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setCount('slam', nextSlam(slam))
    } else {
      setCount('slam', prevSlam(slam))
    }
  }

  return (
    <div className="slam-icon moves-slam">
      <img
        height={24}
        src={slamToIcon(slam)}
        onClick={handleNextLevel}
        onAuxClick={handlePrevLevel}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${slam != 0 ? '0' : '1'})` }}
      />
    </div>
  )
}

export default SlamSelector
