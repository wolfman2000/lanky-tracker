import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useDiddyCageGb,
  useDiddyOwlGb,
  useDiddyRaftersGb,
  useDiddyTopGb
} from '@renderer/hooks/forest'
import ForestCheck from '../ForestCheck'

const DiddyBananas: React.FC = () => {
  const topGb = useDiddyTopGb()
  const owlGb = useDiddyOwlGb()
  const raftersGb = useDiddyRaftersGb()
  return (
    <>
      <ForestCheck
        id={5010}
        name="Forest Diddy Top of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={topGb.in}
        canGetBreak={topGb.out}
      />
      <ToughGoldenBanana>
        <ForestCheck
          id={5011}
          name="Forest Diddy Owl Race"
          region="Owl Tree"
          canGetLogic={owlGb.in}
          canGetBreak={owlGb.out}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5012}
        name="Forest Diddy Caged Banana"
        region="Forest Mills"
        canGetLogic={useDiddyCageGb()}
      />
      <ForestCheck
        id={5013}
        name="Forest Diddy Rafters"
        region="Forest Mills"
        canGetLogic={raftersGb.in}
        canGetBreak={raftersGb.out}
      />
    </>
  )
}

export default DiddyBananas
