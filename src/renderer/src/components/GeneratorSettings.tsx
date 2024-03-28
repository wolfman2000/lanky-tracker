import { useState } from 'react'
import Modal from 'react-modal'

import SimpleIcon from './SimpleIcon'
import CountSelector from './CountSelector'

import shopIcon from '../assets/images/settings/funky.png'
import crownIcon from '../assets/images/crown.png'
import bananaMedalIcon from '../assets/images/settings/bananamedal.gif'
import rainbowCoinIcon from '../assets/images/rainbowcoin.png'
import toughBananaIcon from '../assets/images/settings/rabbit.png'
import blueprintIcon from '../assets/images/lanky_bp.png'
import keyIcon from '../assets/images/key.png'
import fairyIcon from '../assets/images/fairy.png'
import beanIcon from '../assets/images/bean.png'
import companyCoinIcon from '../assets/images/n64rw_coin.png'
import melonIcon from '../assets/images/settings/melon.png'
import bananaIcon from '../assets/images/settings/bunch.png'
import dirtIcon from '../assets/images/settings/dirt_patch.png'
import arenaIcon from '../assets/images/settings/arena.png'
import kasplatIcon from '../assets/images/settings/kasplat.png'
import BananaportSelector from './BananaportSelector'
import hardShootIcon from '../assets/images/settings/hard_shoot.png'
import switchsanityIcon from '../assets/images/settings/switch.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#1b1b1f',
    color: 'white'
  }
}

const GeneratorSettings: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)

  return (
    <span>
      <span onClick={openModal} title="Generator Settings">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Generator Settings"
        style={customStyles}
      >
        <section className="modal-settings">
          <section className="pool">
            <h3>Pool Settings</h3>
            <>
              <p>Shops?</p>
              <SimpleIcon imgUrl={shopIcon} storeKey="poolShops" />
              <p>Tough Golden Bananas?</p>
              <SimpleIcon imgUrl={toughBananaIcon} storeKey="poolToughBananas" />
              <p>Battle Crowns?</p>
              <SimpleIcon imgUrl={crownIcon} storeKey="poolCrowns" />
              <p>Blueprints?</p>
              <SimpleIcon imgUrl={blueprintIcon} storeKey="poolBlueprints" />
              <p>Boss Keys?</p>
              <SimpleIcon imgUrl={keyIcon} storeKey="poolKeys" />
              <p>Banana Medals?</p>
              <SimpleIcon imgUrl={bananaMedalIcon} storeKey="poolBananaMedals" />
              <p>Company Coins?</p>
              <SimpleIcon imgUrl={companyCoinIcon} storeKey="poolCompanyCoins" />
              <p>Banana Fairies?</p>
              <SimpleIcon imgUrl={fairyIcon} storeKey="poolFairies" />
              <p>Rainbow Coins?</p>
              <SimpleIcon imgUrl={rainbowCoinIcon} storeKey="poolRainbowCoins" />
              <p>Melon Crates?</p>
              <SimpleIcon imgUrl={melonIcon} storeKey="poolCrates" />
              <p>Pearls & Bean?</p>
              <SimpleIcon imgUrl={beanIcon} storeKey="poolMisc" />
            </>
            <h3>Consumable Settings</h3>
            <>
              <p>Medals for Jetpac?</p>
              <CountSelector imgUrl={bananaMedalIcon} storeKey="jetpacCount" maxValue={40} />
              <p>Bananas for Medal?</p>
              <CountSelector imgUrl={bananaIcon} storeKey="cbCount" maxValue={100} />
              <p>
                Fairies for <span title="Banana Fairy Island">BFI</span>?
              </p>
              <CountSelector imgUrl={fairyIcon} storeKey="fairyCount" maxValue={20} />
            </>
            <h3>World Settings</h3>
            <>
              <p>Bananaports Active?</p>
              <BananaportSelector />
              <p>Switchsanity On?</p>
              <SimpleIcon imgUrl={switchsanityIcon} storeKey="isSwitchsanity" />
              <p>Hard Shooting?</p>
              <SimpleIcon imgUrl={hardShootIcon} storeKey="hardShooting" />
            </>
            <h3>Location Shuffle Settings</h3>
            <>
              <p>Colored Bananas?</p>
              <SimpleIcon imgUrl={bananaIcon} storeKey="shuffleColoredBananas" />
              <p>Kasplats?</p>
              <SimpleIcon imgUrl={kasplatIcon} storeKey="shuffleKasplats" />
              <p>Fairies?</p>
              <SimpleIcon imgUrl={fairyIcon} storeKey="shuffleFairies" />
              <p>Dirt Patches?</p>
              <SimpleIcon imgUrl={dirtIcon} storeKey="shuffleDirt" />
              <p>Battle Arenas?</p>
              <SimpleIcon imgUrl={arenaIcon} storeKey="shuffleArenas" />
              <p>Melon Crates?</p>
              <SimpleIcon imgUrl={melonIcon} storeKey="shuffleCrates" />
            </>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default GeneratorSettings
