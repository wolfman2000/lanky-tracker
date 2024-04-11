import {
  useChunkyCabinGb,
  useChunkyClearGb,
  useChunkyGoneGb,
  useChunkyIglooGb
} from '@renderer/hooks/caves'
import CavesCheck from '../CavesCheck'

const ChunkyBananas: React.FC = () => {
  const clearGb = useChunkyClearGb()
  return (
    <>
      <CavesCheck
        id={6040}
        name="Caves Chunky Gorilla Gone"
        region="Main Caves Area"
        canGetLogic={useChunkyGoneGb()}
      />
      <CavesCheck
        id={6041}
        name="Caves Chunky Transparent Igloo"
        region="Igloo Area"
        canGetLogic={clearGb.in}
        canGetBreak={clearGb.out}
      />
      <CavesCheck
        id={6042}
        name="Caves Chunky 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={useChunkyIglooGb()}
      />
      <CavesCheck
        id={6043}
        name="Caves Chunky 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={useChunkyCabinGb()}
      />
    </>
  )
}

export default ChunkyBananas
