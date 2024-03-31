import { useCavesDiddyCabinGauntlet, useCavesIgloo, usePlayCaves } from '@renderer/hooks/caves'
import { useBarrel, useDk, useGuitar, useRocket, useSpring, useTwirl } from '@renderer/hooks/kongs'
import CavesCheck from '../CavesCheck'

const DiddyBananas: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const cabinGauntlet = useCavesDiddyCabinGauntlet()
  const rocket = useRocket()
  const guitar = useGuitar()
  const spring = useSpring()
  const barrel = useBarrel()
  const twirl = useTwirl()
  const dk = useDk()
  return (
    <>
      <CavesCheck
        id={6010}
        name="Caves Diddy Waterfall"
        region="Main Caves Area"
        canGetLogic={inStage && rocket}
        canGetBreak={inStage && (dk || twirl)}
      />
      <CavesCheck
        id={6011}
        name="Caves Diddy 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && guitar && barrel}
      />
      <CavesCheck
        id={6012}
        name="Caves Diddy 5 Door Cabin Lower"
        region="Cabins Area"
        canGetLogic={cabinGauntlet.in}
        canGetBreak={cabinGauntlet.out}
      />
      <CavesCheck
        id={6013}
        name="Caves Diddy 5 Door Cabin Upper"
        region="Cabins Area"
        canGetLogic={inStage && guitar && rocket && spring}
        canGetBreak={inStage && guitar && rocket}
      />
    </>
  )
}

export default DiddyBananas
