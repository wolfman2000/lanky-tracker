import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyOwlGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const OwlRace: React.FC = () => {
  const owlGb = useDiddyOwlGb()
  return (
    <ToughGoldenBanana>
      <ForestCheck
        id={5011}
        name="Forest Diddy Owl Race"
        region="Owl Tree"
        canGetLogic={owlGb.in}
        canGetBreak={owlGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default OwlRace
