import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useBananaport } from '@renderer/hooks/settings'
import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'

import portFullIcon from '../../assets/images/settings/bananaport.png'
import portHalfIcon from '../../assets/images/settings/bananaport_isles.png'

const portToIcon = (num: BananaportRange): string => {
  return num == 1 ? portHalfIcon : portFullIcon
}

const clamp = (num: number): number => Math.min(Math.max(num, 0), 2)

const nextPort = (num: number): number => clamp(num + 1)

const prevPort = (num: number): number => clamp(num - 1)

const BananaportSelector: React.FC = () => {
  const bananaport = useBananaport()
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]))

  const handleNextLevel = (): void => {
    setSetting('bananaportOpen', nextPort(bananaport))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSetting('bananaportOpen', prevPort(bananaport))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('bananaportOpen', nextPort(bananaport))
    } else {
      setSetting('bananaportOpen', prevPort(bananaport))
    }
  }

  return (
    <div>
      <img
        className="simple-icon"
        height={24}
        title={bananaport == 0 ? 'None' : bananaport == 1 ? 'Isles' : 'All'}
        src={portToIcon(bananaport)}
        onClick={handleNextLevel}
        onContextMenu={handlePrevLevel}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${bananaport != 0 ? '0' : '1'})` }}
      />
    </div>
  )
}

export default BananaportSelector
