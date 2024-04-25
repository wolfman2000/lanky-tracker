import { useLankyPaintingGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const PaintingRoom: React.FC = () => {
  const paintingGb = useLankyPaintingGb()
  return (
    <JapesCheck
      id={1023}
      name="Japes Lanky Painting Room Zingers"
      region="Japes Caves And Mines"
      canGetLogic={paintingGb.in}
      canGetBreak={paintingGb.out}
    />
  )
}

export default PaintingRoom
