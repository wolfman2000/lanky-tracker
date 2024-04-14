import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useCheckBananaFairyIsle } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

export const ReturnFairies: React.FC = () => {
  const checkBfi = useCheckBananaFairyIsle()
  return (
    <ToughGoldenBanana>
      <IslesCheck
        id={47}
        name="Returning the Banana Fairies"
        region="Outer Isles"
        canGetLogic={checkBfi}
      />
    </ToughGoldenBanana>
  )
}

export default ReturnFairies
