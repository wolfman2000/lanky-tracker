import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import LevelTable from './components/LevelTable'
import MoveTable from './components/MoveTable'
import ResetTracker from './components/ResetComponent'
import RuntimeSettings from './components/RuntimeSettings'
import SwitchsanitySelector from './components/Switchsanity'
import AztecChecks from './components/aztec'
import CastleChecks from './components/castle'
import CavesChecks from './components/caves'
import FactoryChecks from './components/factory'
import ForestChecks from './components/forest'
import GalleonChecks from './components/galleon'
import FoolishHints from './components/hints'
import IsleChecks from './components/isles'
import JapesChecks from './components/japes'

function App(): JSX.Element {
  /*
  const cbCount = useDonkStore((state) => state.settings.cbCount)
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
          <RuntimeSettings />
          <SwitchsanitySelector />
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
