import KoshaDirt from '../dirt/Kosha'
import IglooEnemies from '../enemies/Igloo'
import IglooFairy from '../fairies/Igloo'
import TransparentIgloo from '../gold-bananas/chunky/ClearIgloo'
import ChunkyIgloo from '../gold-bananas/chunky/Igloo'
import DiddyIgloo from '../gold-bananas/diddy/Igloo'
import DkIgloo from '../gold-bananas/dk/Igloo'
import LankyIgloo from '../gold-bananas/lanky/Igloo'
import TinyIgloo from '../gold-bananas/tiny/Igloo'
import MonkeyportIgloo from '../gold-bananas/tiny/Port'
import ChunkyKasplat from '../kasplats/Chunky'

const IglooChecks: React.FC = () => (
  <>
    <DkIgloo />
    <DiddyIgloo />
    <LankyIgloo />
    <TinyIgloo />
    <ChunkyIgloo />
    <MonkeyportIgloo />
    <TransparentIgloo />
    <ChunkyKasplat />
    <IglooFairy />
    <KoshaDirt />
    <IglooEnemies />
  </>
)

export default IglooChecks
