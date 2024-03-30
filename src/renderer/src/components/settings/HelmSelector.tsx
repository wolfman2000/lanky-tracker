import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'

import { useHelmStartPosition } from '@renderer/hooks/settings'
import helmFullIcon from '../../assets/images/settings/krem_isle.png'
import helmHalfIcon from '../../assets/images/settings/krem_isle_half.png'

const portToIcon = (num: BananaportRange): string => {
  return num == 1 ? helmHalfIcon : helmFullIcon
}

const clamp = (num: number): number => Math.min(Math.max(num, 0), 2)

const nextPort = (num: number): number => clamp(num + 1)

const prevPort = (num: number): number => clamp(num - 1)

const HelmSelector: React.FC = () => {
  const helmAccess = useHelmStartPosition()
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]))

  const handleNextLevel = (): void => {
    setSetting('helmAccess', nextPort(helmAccess))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSetting('helmAccess', prevPort(helmAccess))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('helmAccess', nextPort(helmAccess))
    } else {
      setSetting('helmAccess', prevPort(helmAccess))
    }
  }

  return (
    <div>
      <img
        className="simple-icon"
        height={24}
        title={helmAccess == 0 ? 'Start' : helmAccess == 1 ? 'Machine' : 'Doors'}
        src={portToIcon(helmAccess)}
        onClick={handleNextLevel}
        onContextMenu={handlePrevLevel}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${helmAccess != 0 ? '0' : '1'})` }}
      />
    </div>
  )
}

export default HelmSelector
