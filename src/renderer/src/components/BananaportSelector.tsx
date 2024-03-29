import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'

import portFullIcon from '../assets/images/settings/bananaport.png'
import portHalfIcon from '../assets/images/settings/bananaport_isles.png'

const portToIcon = (num: BananaportRange): string => {
  return num == 1 ? portHalfIcon : portFullIcon
}

const clamp = (num: number): number => Math.min(Math.max(num, 0), 2)

const nextPort = (num: number): number => clamp(num + 1)

const prevPort = (num: number): number => clamp(num - 1)

const BananaportSelector: React.FC = () => {
  const [bananaportOpen, setSetting] = useDonkStore(
    useShallow((state) => [state.settings.bananaportOpen, state.setSetting])
  )

  const handleNextLevel = (): void => {
    setSetting('bananaportOpen', nextPort(bananaportOpen))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSetting('bananaportOpen', prevPort(bananaportOpen))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('bananaportOpen', nextPort(bananaportOpen))
    } else {
      setSetting('bananaportOpen', prevPort(bananaportOpen))
    }
  }

  return (
    <div>
      <img
        className="simple-icon"
        height={24}
        title={bananaportOpen == 0 ? 'None' : bananaportOpen == 1 ? 'Isles' : 'All'}
        src={portToIcon(bananaportOpen)}
        onClick={handleNextLevel}
        onContextMenu={handlePrevLevel}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${bananaportOpen != 0 ? '0' : '1'})` }}
      />
    </div>
  )
}

export default BananaportSelector
