import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

const timeToString = (time: BananaportRange): string => {
  switch (time) {
    case 0:
      return '☼'
    case 1:
      return '☽'
    default:
      return '☼☽'
  }
}

const nextTime = (time: BananaportRange): BananaportRange => {
  switch (time) {
    case 0:
      return 1
    case 1:
      return 2
    default:
      return 0
  }
}

const prevTime = (time: BananaportRange): BananaportRange => {
  switch (time) {
    case 0:
      return 2
    case 1:
      return 0
    default:
      return 1
  }
}

const RuntimeSettings: React.FC = () => {
  const [forestTime, galleonHighTide, setSetting] = useDonkStore(
    useShallow((state) => [state.forestTime, state.galleonHighTide, state.setSetting])
  )

  const handleClick = (): void => {
    setSetting('forestTime', nextTime(forestTime))
  }
  const handleContextClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
    e.preventDefault()
    setSetting('forestTime', prevTime(forestTime))
  }

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('forestTime', nextTime(forestTime))
    } else {
      setSetting('forestTime', prevTime(forestTime))
    }
  }

  return (
    <section className="runtime-settings">
      <h3>Runtime Settings</h3>
      <div>
        <p>Galleon Starting Tide</p>
        <span onClick={() => setSetting('galleonHighTide', !galleonHighTide)}>
          {galleonHighTide ? '🠱' : '🠳'}
        </span>
        <p>Forest Time Active</p>
        <span onClick={handleClick} onContextMenu={handleContextClick} onWheel={handleWheel}>
          {timeToString(forestTime)}
        </span>
      </div>
    </section>
  )
}

export default RuntimeSettings
