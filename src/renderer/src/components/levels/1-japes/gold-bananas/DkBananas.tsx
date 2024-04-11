import { useDkBlastGb, useDkCagedGb, useDkFreeDiddyGb, useDkFreebieGb } from '@renderer/hooks/japes'
import JapesCheck from '../JapesCheck'

const DkBananas: React.FC = () => {
  return (
    <>
      <JapesCheck
        id={1001}
        name="Japes DK Front of Cage"
        region="Japes Hillside"
        canGetLogic={useDkFreebieGb()}
      />
      <JapesCheck
        id={1002}
        name="Japes DK Free Diddy"
        region="Japes Hillside"
        canGetLogic={useDkFreeDiddyGb()}
      />
      <JapesCheck
        id={1003}
        name="Japes DK Caged Banana"
        region="Japes Lowlands"
        canGetLogic={useDkCagedGb()}
      />
      <JapesCheck
        id={1004}
        name="Japes DK Baboon Blast"
        region="Japes Lowlands"
        canGetLogic={useDkBlastGb()}
      />
    </>
  )
}

export default DkBananas
