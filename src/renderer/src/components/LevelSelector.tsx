import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import japesIcon from '../assets/images/japes.png'
import aztecIcon from '../assets/images/aztec.png'
import factoryIcon from '../assets/images/factory.png'
import galleonIcon from '../assets/images/galleon.png'
import forestIcon from '../assets/images/forest.png'
import cavesIcon from '../assets/images/caves.png'
import castleIcon from '../assets/images/castle.png'
import helmIcon from '../assets/images/helm.png'
import unknownIcon from '../assets/images/unknown.png'
import { WheelEvent } from 'react'
import { Level } from '@renderer/store/common'

type LevelSelectorProps = {
  storeKey: string
}

const levelToIcon = (level: Level): string => {
  switch (level) {
    case 'Aztec':
      return aztecIcon
    case 'Castle':
      return castleIcon
    case 'Caves':
      return cavesIcon
    case 'Factory':
      return factoryIcon
    case 'Forest':
      return forestIcon
    case 'Galleon':
      return galleonIcon
    case 'Helm':
      return helmIcon
    case 'Japes':
      return japesIcon
    default:
      return unknownIcon
  }
}

const nextLevel = (level: Level): Level => {
  switch (level) {
    case 'Japes':
      return 'Aztec'
    case 'Aztec':
      return 'Factory'
    case 'Factory':
      return 'Galleon'
    case 'Galleon':
      return 'Forest'
    case 'Forest':
      return 'Caves'
    case 'Caves':
      return 'Castle'
    case 'Castle':
      return 'Helm'
    case 'Helm':
      return ''
    default:
      return 'Japes'
  }
}

const prevLevel = (level: Level): Level => {
  switch (level) {
    case 'Japes':
      return ''
    case 'Aztec':
      return 'Japes'
    case 'Factory':
      return 'Aztec'
    case 'Galleon':
      return 'Factory'
    case 'Forest':
      return 'Galleon'
    case 'Caves':
      return 'Forest'
    case 'Castle':
      return 'Caves'
    case 'Helm':
      return 'Castle'
    default:
      return 'Helm'
  }
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ storeKey }) => {
  const [level, setLevel] = useDonkStore(useShallow((state) => [state[storeKey], state.setLevel]))
  const lvlNum = Number.parseInt(storeKey.slice(5), 10)

  const handleNextLevel = (): void => {
    if (storeKey !== 'level8') setLevel(lvlNum, nextLevel(level))
  }

  const handlePrevLevel = (): void => {
    if (storeKey !== 'level8') setLevel(lvlNum, prevLevel(level))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (storeKey !== 'level8') {
      if (e.deltaY >= 0) {
        setLevel(lvlNum, nextLevel(level))
      } else {
        setLevel(lvlNum, prevLevel(level))
      }
    }
  }

  return (
    <div>
      <img
        height={24}
        src={levelToIcon(level)}
        onClick={handleNextLevel}
        onAuxClick={handlePrevLevel}
        onWheel={handleWheel}
      />
    </div>
  )
}

export default LevelSelector
