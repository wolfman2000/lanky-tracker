import { useGeneralDirt } from '@renderer/hooks/isles'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
  const dirt = useGeneralDirt()
  if (!useShuffleDirt()) {
    return null
  }
  return (
    <>
      <IslesCheck id={270} name="Isles Dirt Location #1" canGetLogic={dirt} />
      <IslesCheck id={271} name="Isles Dirt Location #2" canGetLogic={dirt} />
      <IslesCheck id={272} name="Isles Dirt Location #3" canGetLogic={dirt} />
      <IslesCheck id={273} name="Isles Dirt Location #4" canGetLogic={dirt} />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
