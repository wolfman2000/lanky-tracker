import useDonkStore from '@renderer/store'
import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

type SwitchsanityProps = {
  storeKey: string
  currValue: number
  images: string[]
}

const SwitchsanitySwitch: React.FC<SwitchsanityProps> = (props) => {
  const [switchsanitySwitches, setSwitchsanity] = useDonkStore(
    useShallow((state) => [state.switchsanitySwitches, state.setSwitchsanity])
  )
  const setting: number = switchsanitySwitches[props.storeKey]

  const nextSwitch = (num: number): number => {
    let target = num + 1
    if (target == props.images.length) {
      target = 0
    }
    return target
  }
  const prevSwitch = (num: number): number => {
    let target = num - 1
    if (target < 0) {
      target = props.images.length - 1
    }
    return target
  }

  const handleNextLevel = (): void => {
    setSwitchsanity(props.storeKey, nextSwitch(setting))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSwitchsanity(props.storeKey, prevSwitch(setting))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSwitchsanity(props.storeKey, nextSwitch(setting))
    } else {
      setSwitchsanity(props.storeKey, prevSwitch(setting))
    }
  }

  return (
    <>
      <img
        height={24}
        width={24}
        className="simple-icon"
        src={props.images[setting]}
        onClick={handleNextLevel}
        onAuxClick={handlePrevLevel}
        onWheel={handleWheel}
      />
    </>
  )
}

export default SwitchsanitySwitch
