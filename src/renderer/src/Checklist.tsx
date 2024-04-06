import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import IsleChecks from './components/levels/0-isles'
import JapesChecks from './components/levels/1-japes'
import AztecChecks from './components/levels/2-aztec'
import FactoryChecks from './components/levels/3-factory'
import GalleonChecks from './components/levels/4-galleon'
import ForestChecks from './components/levels/5-forest'
import CavesChecks from './components/levels/6-caves'
import CastleChecks from './components/levels/7-castle'
import HelmChecks from './components/levels/8-helm'

const Checklist: React.FC = () => {
  return (
    <article>
      <Tabs>
        <TabList>
          <Tab>Isles</Tab>
          <Tab>Japes</Tab>
          <Tab>Aztec</Tab>
          <Tab>Factory</Tab>
          <Tab>Galleon</Tab>
          <Tab>Forest</Tab>
          <Tab>Caves</Tab>
          <Tab>Castle</Tab>
          <Tab>Helm</Tab>
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
        <TabPanel>
          <HelmChecks />
        </TabPanel>
      </Tabs>
    </article>
  )
}

export default Checklist
