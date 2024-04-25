import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkBlastGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const SealRace: React.FC = () => {
  const blastGb = useDkBlastGb()
  return (
    <ToughGoldenBanana>
      <GalleonCheck
        id={4003}
        name="Galleon Donkey Seal Race"
        region="Shipyard Outskirts"
        canGetLogic={blastGb.in}
        canGetBreak={blastGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default SealRace
