import CompanyPool from '@renderer/components/pools/Company'
import { useCurrentBananaMedalCount } from '@renderer/hooks/consumables'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useJetpacCount } from '@renderer/hooks/settings'
import IslesCheck from './check'

const JetpacCheck: React.FC = () => {
  const medals = useCurrentBananaMedalCount()
  const jetpacCount = useJetpacCount()
  const anyKong = useAnyKong()
  return (
    <CompanyPool>
      <IslesCheck
        id={105}
        name="Cranky Jetpac Game"
        canGetLogic={anyKong && medals >= jetpacCount}
      />
    </CompanyPool>
  )
}

export default JetpacCheck
