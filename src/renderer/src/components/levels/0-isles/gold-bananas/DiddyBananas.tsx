import {
  useCheckDiddyCage,
  useCheckDiddyCaves,
  useCheckDiddySnide,
  useCheckDiddySummit
} from '@renderer/hooks/isles'
import IslesCheck from '../IslesCheck'

const DiddyBananas: React.FC = () => {
  const snide = useCheckDiddySnide()
  const cage = useCheckDiddyCage()
  const summit = useCheckDiddySummit()
  const cave = useCheckDiddyCaves()

  return (
    <>
      <IslesCheck
        id={10}
        name="Isles Diddy Snide's Spring Barrel"
        region="Krem Isle"
        canGetLogic={snide.in}
        canGetBreak={snide.out}
      />
      <IslesCheck
        id={11}
        name="Isles Diddy Peanut Cage"
        region="Main Isle"
        canGetLogic={cage.in}
        canGetBreak={cage.out}
      />
      <IslesCheck
        id={12}
        name="Isles Diddy Summit Barrel"
        region="Main Isle"
        canGetLogic={summit.in}
        canGetBreak={summit.out}
      />
      <IslesCheck
        id={13}
        name="Isles Diddy Guitar Pad"
        region="Caves-Helm Lobbies"
        canGetLogic={cave.in}
        canGetBreak={cave.out}
      />
    </>
  )
}

export default DiddyBananas
