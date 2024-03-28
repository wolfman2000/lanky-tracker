import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  useSlamFactory
} from '@renderer/hooks/factory'
import {
  useCharge,
  useDiddy,
  useDk,
  useGuitar,
  useHighGrab,
  useSpring,
  useTwirl,
  useVine
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FactoryCheck from '../FactoryCheck'

const DiddyBananas: React.FC = () => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const dk = useDk()
  const diddy = useDiddy()
  const spring = useSpring()
  const guitar = useGuitar()
  const charge = useCharge()
  const highGrab = useHighGrab()
  const vine = useVine()
  const twirl = useTwirl()
  const [autoBonus] = useDonkStore(useShallow((state) => [state.settings.autoBonus]))
  return (
    <>
      <FactoryCheck
        id={3010}
        name="Factory Diddy Block Tower"
        region="Testing Area"
        canGetLogic={testing && spring}
        canGetBreak={testing && highGrab}
      />
      <FactoryCheck
        id={3011}
        name="Factory Diddy R&D"
        region="R&D Area"
        canGetLogic={testing && guitar && charge}
      />
      <FactoryCheck
        id={3012}
        name="Factory Diddy Chunky Room Barrel"
        region="Storage And Arcade"
        canGetLogic={testing && canSlam && diddy && (autoBonus || vine)}
        canGetBreak={testing && canSlam && diddy && dk}
      />
      <FactoryCheck
        id={3013}
        name="Factory Diddy Production Room"
        region="Production Room"
        canGetLogic={production && canSlam && diddy && spring}
        canGetBreak={production && canSlam && diddy && (twirl || highGrab)}
      />
    </>
  )
}

export default DiddyBananas
