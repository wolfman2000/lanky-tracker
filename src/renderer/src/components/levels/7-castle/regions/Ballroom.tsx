import BallroomEnemies from '../enemies/Ballroom'
import RoomFairy from '../fairies/Room'
import DiddyBallroom from '../gold-bananas/diddy/Ballroom'
import TinyRace from '../gold-bananas/tiny/Race'

const BallroomChecks: React.FC = () => (
  <>
    <BallroomEnemies />
    <DiddyBallroom />
    <TinyRace />
    <RoomFairy />
  </>
)

export default BallroomChecks
