import { useDkBlastGb, useDkCagedGb, useDkFreeDiddyGb, useDkFreebieGb } from '@renderer/hooks/japes'
import JapesCheck from '../JapesCheck'

const DkBananas: React.FC = () => {
  return (
    <>
      <JapesCheck
        id={1001}
        name="Japes Donkey Front of Diddy Cage"
        region="Japes Hillside"
        canGetLogic={useDkFreebieGb()}
      />
      <JapesCheck
        id={1002}
        name="Japes Free Diddy Item"
        region="Japes Hillside"
        canGetLogic={useDkFreeDiddyGb()}
      />
      <JapesCheck
        id={1003}
        name="Japes Donkey Floor Cage Banana"
        region="Japes Lowlands"
        canGetLogic={useDkCagedGb()}
      />
      <JapesCheck
        id={1004}
        name="Japes Donkey Baboon Blast"
        region="Japes Lowlands"
        canGetLogic={useDkBlastGb()}
      />
    </>
  )
}

export default DkBananas
