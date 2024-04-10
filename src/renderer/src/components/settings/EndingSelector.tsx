import useDonkStore from '@renderer/store'
import { EndingState, PearlRange } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

import chunkyFace from '../../assets/images/chunky.png'
import diddyFace from '../../assets/images/diddy.png'
import dkFace from '../../assets/images/dk.png'
import lankyFace from '../../assets/images/lanky.png'
import tinyFace from '../../assets/images/tiny.png'
import unknownFace from '../../assets/images/unknown-small.png'

type EndingSelectorProps = {
  rootKey: keyof EndingState
}

const currImg = (val: PearlRange): string => {
  switch (val) {
    case 0:
      return unknownFace
    case 1:
      return dkFace
    case 2:
      return diddyFace
    case 3:
      return lankyFace
    case 4:
      return tinyFace
    default:
      return chunkyFace
  }
}

const nextEnd = (val: PearlRange): PearlRange => {
  const target = val + 1
  if (target > 5) {
    return 0
  }
  return target as PearlRange
}

const prevEnd = (val: PearlRange): PearlRange => {
  const target = val - 1
  if (target < 0) {
    return 5
  }
  return target as PearlRange
}

const EndingSelector: React.FC<EndingSelectorProps> = (props) => {
  const [endingChar, setEnd] = useDonkStore(
    useShallow((state) => [state[props.rootKey] as PearlRange, state.setEnd])
  )

  const handleNext = (): void => {
    setEnd(props.rootKey, nextEnd(endingChar))
  }

  const handlePrev = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setEnd(props.rootKey, prevEnd(endingChar))
  }

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setEnd(props.rootKey, nextEnd(endingChar))
    } else {
      setEnd(props.rootKey, prevEnd(endingChar))
    }
  }

  return (
    <>
      <img
        height={24}
        width={24}
        className="simple-icon"
        src={currImg(endingChar)}
        onClick={handleNext}
        onContextMenu={handlePrev}
        onWheel={handleWheel}
      />
    </>
  )
}

export default EndingSelector
