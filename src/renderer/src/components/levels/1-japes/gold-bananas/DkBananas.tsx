import { useJapesRambi, usePlayJapes, useSlamJapes } from '@renderer/hooks/japes'
import { useAnyKong, useBlast, useDk, useVine } from '@renderer/hooks/kongs'
import JapesCheck from '../JapesCheck'

const DkBananas: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const canSlam = useSlamJapes()
  const japesRambi = useJapesRambi()
  const dk = useDk()
  const blast = useBlast()
  const vine = useVine()
  return (
    <>
      <JapesCheck
        id={1001}
        name="Japes DK Front of Cage"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1002 /* TODO: Is it worth having this lock the others? */}
        name="Japes DK Free Diddy"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1003}
        name="Japes DK Caged Banana"
        region="Japes Lowlands"
        canGetLogic={japesRambi && dk && canSlam}
      />
      <JapesCheck
        id={1004}
        name="Japes DK Baboon Blast"
        region="Japes Lowlands"
        canGetLogic={inStage && blast && vine}
      />
    </>
  )
}

export default DkBananas
