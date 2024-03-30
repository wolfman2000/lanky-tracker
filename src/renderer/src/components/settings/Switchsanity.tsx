import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import SwitchsanitySwitch from './SwitchsanitySwitch'

import chunkyKongIcon from '../../assets/images/chunky.png'
import chunkyGunIcon from '../../assets/images/chunky_gun.png'
import chunkyMusicIcon from '../../assets/images/chunky_inst.png'
import chunkyPadIcon from '../../assets/images/chunkypad.png'
import diddyKongIcon from '../../assets/images/diddy.png'
import diddyGunIcon from '../../assets/images/diddy_gun.png'
import diddyMusicIcon from '../../assets/images/diddy_inst.png'
import diddyMoveIcon from '../../assets/images/diddy_move.png'
import dkKongIcon from '../../assets/images/dk.png'
import dkGunIcon from '../../assets/images/dk_gun.png'
import dkMusicIcon from '../../assets/images/dk_inst.png'
import dkMoveIcon from '../../assets/images/dk_move.png'
import dkPadIcon from '../../assets/images/dkpad.png'
import lankyKongIcon from '../../assets/images/lanky.png'
import lankyGunIcon from '../../assets/images/lanky_gun.png'
import lankyMusicIcon from '../../assets/images/lanky_inst.png'
import lankyPadIcon from '../../assets/images/lankypad.png'
import tinyKongIcon from '../../assets/images/tiny.png'
import tinyGunIcon from '../../assets/images/tiny_gun.png'
import tinyMusicIcon from '../../assets/images/tiny_inst.png'
import tinyPadIcon from '../../assets/images/tinypad.png'

const allKong = [dkKongIcon, diddyKongIcon, lankyKongIcon, tinyKongIcon, chunkyKongIcon]
const allGun = [dkGunIcon, diddyGunIcon, lankyGunIcon, tinyGunIcon, chunkyGunIcon]
const allMusic = [dkMusicIcon, diddyMusicIcon, lankyMusicIcon, tinyMusicIcon, chunkyMusicIcon]

const SwitchsanitySelector: React.FC = () => {
  const [isSwitchsanity, switches] = useDonkStore(
    useShallow((state) => [state.settings.isSwitchsanity, state.switchsanitySwitches])
  )
  if (!isSwitchsanity) {
    return null
  }

  return (
    <section className="switchsanity-settings">
      <h4>Switchsanity</h4>
      <section>
        <p>Isles Rocket Barrel</p>
        <SwitchsanitySwitch
          currValue={switches.islesTrombone}
          storeKey="islesTrombone"
          images={allMusic}
        />
        <p>Isles Forest Lobby</p>
        <SwitchsanitySwitch
          currValue={switches.islesForest}
          storeKey="islesForest"
          images={allGun}
        />
        <p>Isles Krem Top</p>
        <SwitchsanitySwitch
          currValue={switches.islesMonkeyport}
          storeKey="islesMonkeyport"
          images={[tinyPadIcon, dkPadIcon, lankyPadIcon]}
        />
        <p>Isles Helm Access</p>
        <SwitchsanitySwitch
          currValue={switches.islesHelm}
          storeKey="islesHelm"
          images={[
            chunkyPadIcon,
            dkMoveIcon,
            diddyMoveIcon,
            dkMusicIcon,
            diddyMusicIcon,
            lankyMusicIcon,
            tinyMusicIcon,
            chunkyMusicIcon
          ]}
        />
        <p>Japes Hive Area</p>
        <SwitchsanitySwitch currValue={switches.japesHive} storeKey="japesHive" images={allGun} />
        <p>Japes Rambi Cage</p>
        <SwitchsanitySwitch currValue={switches.japesRambi} storeKey="japesRambi" images={allGun} />
        <p>Japes Painting Room</p>
        <SwitchsanitySwitch
          currValue={switches.japesPainting}
          storeKey="japesPainting"
          images={allGun}
        />
        <p>Japes Early Tunnel</p>
        <SwitchsanitySwitch currValue={switches.japesSide} storeKey="japesSide" images={allGun} />
        <p>Aztec Early Kasplat</p>
        <SwitchsanitySwitch
          currValue={switches.aztecBlueprint}
          storeKey="aztecBlueprint"
          images={allGun}
        />
        <p>Aztec Back Access</p>
        <SwitchsanitySwitch currValue={switches.aztecBack} storeKey="aztecBack" images={allMusic} />
        <p>Aztec Llama Temple 1</p>
        <SwitchsanitySwitch
          currValue={switches.aztecLlama1}
          storeKey="aztecLlama1"
          images={allGun}
        />
        <p>Aztec Llama Temple 2</p>
        <SwitchsanitySwitch
          currValue={switches.aztecLlama2}
          storeKey="aztecLlama2"
          images={allGun}
        />
        <p>Aztec Llama Temple 3</p>
        <SwitchsanitySwitch
          currValue={switches.aztecLlama3}
          storeKey="aztecLlama3"
          images={allGun}
        />
        <p>Aztec Dead End</p>
        <SwitchsanitySwitch
          currValue={switches.aztecDeadEnd}
          storeKey="aztecDeadEnd"
          images={allKong}
        />
        <p>Galleon Lighthouse Area</p>
        <SwitchsanitySwitch
          currValue={switches.galleonLighthouse}
          storeKey="galleonLighthouse"
          images={allGun}
        />
        <p>Galleon Outskirts Area</p>
        <SwitchsanitySwitch
          currValue={switches.galleonOutskirts}
          storeKey="galleonOutskirts"
          images={allGun}
        />
        <p>Galleon Cannon Game</p>
        <SwitchsanitySwitch
          currValue={switches.galleonCannon}
          storeKey="galleonCannon"
          images={allGun}
        />
        <p>Forest Owl Tree</p>
        <SwitchsanitySwitch
          currValue={switches.forestOwlTree}
          storeKey="forestOwlTree"
          images={allGun}
        />
        <p>Forest Beanstalk Area 1</p>
        <SwitchsanitySwitch
          currValue={switches.forestBean1}
          storeKey="forestBean1"
          images={allGun}
        />
        <p>Forest Beanstalk Area 2</p>
        <SwitchsanitySwitch
          currValue={switches.forestBean2}
          storeKey="forestBean2"
          images={allGun}
        />
      </section>
    </section>
  )
}

export default SwitchsanitySelector
