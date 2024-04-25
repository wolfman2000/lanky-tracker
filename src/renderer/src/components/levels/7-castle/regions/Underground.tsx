import MausoleumCrate from '../crates/Mausoleum'
import UndergroundEnemies from '../enemies/Underground'
import ChunkyCrypt from '../gold-bananas/chunky/Crypt'
import DiddyCrypt from '../gold-bananas/diddy/Crypt'
import DiddyDungeon from '../gold-bananas/diddy/Dungeon'
import DkDungeon from '../gold-bananas/dk/Dungeon'
import DkMinecart from '../gold-bananas/dk/Minecart'
import LankyDungeon from '../gold-bananas/lanky/Dungeon'
import LankyMausoleum from '../gold-bananas/lanky/Mausoleum'
import TinyChasm from '../gold-bananas/tiny/Chasm'
import TinyMausoleum from '../gold-bananas/tiny/Mausoleum'
import ChunkyKasplat from '../kasplats/Chunky'
import DiddyKasplat from '../kasplats/Diddy'

const UndergroundChecks: React.FC = () => (
  <>
    <DkMinecart />
    <DkDungeon />
    <DiddyCrypt />
    <DiddyDungeon />
    <LankyMausoleum />
    <LankyDungeon />
    <TinyMausoleum />
    <TinyChasm />
    <ChunkyCrypt />
    <DiddyKasplat />
    <ChunkyKasplat />
    <MausoleumCrate />
    <UndergroundEnemies />
  </>
)

export default UndergroundChecks
