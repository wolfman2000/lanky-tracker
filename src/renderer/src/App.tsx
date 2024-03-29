import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import LevelTable from './components/settings/LevelTable'
import MoveTable from './components/moves/MoveTable'
import ResetTracker from './components/ResetComponent'
import RuntimeSettings from './components/settings/RuntimeSettings'
import SwitchsanitySelector from './components/settings/Switchsanity'
import FoolishHints from './components/hints'
import IsleChecks from './components/levels/0-isles'
import JapesChecks from './components/levels/1-japes'
import AztecChecks from './components/levels/2-aztec'
import FactoryChecks from './components/levels/3-factory'
import GalleonChecks from './components/levels/4-galleon'
import ForestChecks from './components/levels/5-forest'
import CavesChecks from './components/levels/6-caves'
import CastleChecks from './components/levels/7-castle'

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
