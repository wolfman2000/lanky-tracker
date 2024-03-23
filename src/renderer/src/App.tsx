import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import IsleChecks from './components/isles'
import JapesChecks from './components/japes'
import LevelTable from './components/LevelTable'
import MoveTable from './components/MoveTable'
import AztecChecks from './components/aztec'
import FactoryChecks from './components/factory'
import GalleonChecks from './components/galleon'
import ForestChecks from './components/forest'
import CavesChecks from './components/caves'
import CastleChecks from './components/castle'
import FoolishHints from './components/hints'
import ResetTracker from './components/ResetComponent'

function App(): JSX.Element {
  /*
  const cbCount = useDonkStore((state) => state.cbCount)
  const setCbCount = useDonkStore((state) => state.setCbCount)

  const handleCbCount = (evt: ChangeEvent<HTMLInputElement>): void => {
    let target = parseInt(evt.target.value)
    if (isNaN(target)) {
      target = 40
    }
    setCbCount(target)
  }

  const inputBananas = (
    <p>
      Set CB Count: <input type="text" onChange={handleCbCount} value={cbCount} />
    </p>
  )
  */
  return (
    <>
      <main>
        <article>
          <MoveTable />
          <LevelTable />
          <FoolishHints />
          <ResetTracker />
        </article>
        <article>
          <Tabs>
            <TabList>
              <Tab>Isles &amp; Helm</Tab>
              <Tab>Japes</Tab>
              <Tab>Aztec</Tab>
              <Tab>Factory</Tab>
              <Tab>Galleon</Tab>
              <Tab>Forest</Tab>
              <Tab>Caves</Tab>
              <Tab>Castle</Tab>
            </TabList>
            <TabPanel>
              <IsleChecks />
            </TabPanel>
            <TabPanel>
              <JapesChecks />
            </TabPanel>
            <TabPanel>
              <AztecChecks />
            </TabPanel>
            <TabPanel>
              <FactoryChecks />
            </TabPanel>
            <TabPanel>
              <GalleonChecks />
            </TabPanel>
            <TabPanel>
              <ForestChecks />
            </TabPanel>
            <TabPanel>
              <CavesChecks />
            </TabPanel>
            <TabPanel>
              <CastleChecks />
            </TabPanel>
          </Tabs>
        </article>
      </main>
    </>
  )
}

export default App
