import SimpleIcon from './SimpleIcon'

import dkIcon from '../assets/images/dk.png'
import dkGunIcon from '../assets/images/dk_gun.png'
import dkInstIcon from '../assets/images/dk_inst.png'
import dkMoveIcon from '../assets/images/dk_move.png'
import dkBarrelIcon from '../assets/images/dkbarrel.png'
import dkPadIcon from '../assets/images/dkpad.png'
import diddyIcon from '../assets/images/diddy.png'
import diddyGunIcon from '../assets/images/diddy_gun.png'
import diddyInstIcon from '../assets/images/diddy_inst.png'
import diddyMoveIcon from '../assets/images/diddy_move.png'
import diddyBarrelIcon from '../assets/images/diddybarrel.png'
import diddyPadIcon from '../assets/images/diddypad.png'
import lankyIcon from '../assets/images/lanky.png'
import lankyGunIcon from '../assets/images/lanky_gun.png'
import lankyInstIcon from '../assets/images/lanky_inst.png'
import lankyMoveIcon from '../assets/images/lanky_move.png'
import lankyBarrelIcon from '../assets/images/lankybarrel.png'
import lankyPadIcon from '../assets/images/lankypad.png'
import tinyIcon from '../assets/images/tiny.png'
import tinyGunIcon from '../assets/images/tiny_gun.png'
import tinyInstIcon from '../assets/images/tiny_inst.png'
import tinyMoveIcon from '../assets/images/tiny_move.png'
import tinyBarrelIcon from '../assets/images/tinybarrel.png'
import tinyPadIcon from '../assets/images/tinypad.png'
import chunkyIcon from '../assets/images/chunky.png'
import chunkyGunIcon from '../assets/images/chunky_gun.png'
import chunkyInstIcon from '../assets/images/chunky_inst.png'
import chunkyMoveIcon from '../assets/images/chunky_move.png'
import chunkyBarrelIcon from '../assets/images/chunkybarrel.png'
import chunkyPadIcon from '../assets/images/chunkypad.png'

import diveIcon from '../assets/images/diving.png'
import orangeIcon from '../assets/images/orange.png'
import barrelIcon from '../assets/images/barrel2.png'
import vineIcon from '../assets/images/vine.png'
import DoubleIcon from './DoubleIcon'

import filmWaveBoth from '../assets/images/filmwave.png'
import filmWaveLeft from '../assets/images/filmwave1.png'
import filmWaveRight from '../assets/images/filmwave2.png'

import homeScopeBoth from '../assets/images/homingscope.png'
import homeScopeLeft from '../assets/images/homingscope1.png'
import homeScopeRight from '../assets/images/homingscope2.png'

import companyCoinBoth from '../assets/images/n64rw_coin.png'
import companyCoinLeft from '../assets/images/n64rw_coin_rwbw.png'
import companyCoinRight from '../assets/images/n64rw_coin_n64bw.png'

import beanIcon from '../assets/images/bean.png'
import pearlIcon from '../assets/images/pearl.png'
import SlamSelector from './SlamSelector'
import CountSelector from './CountSelector'

const MoveTable = (): JSX.Element => {
  return (
    <table className="move-table">
      <tbody>
        <tr>
          <td>
            <SimpleIcon storeKey="dk" imgUrl={dkIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="coconut" imgUrl={dkGunIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="bongos" imgUrl={dkInstIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="grab" imgUrl={dkMoveIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="strong" imgUrl={dkBarrelIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="blast" imgUrl={dkPadIcon} />
          </td>
          <td>
            <SlamSelector />
          </td>
          <td>
            <DoubleIcon
              storeLeft="camera"
              storeRight="shockwave"
              imgBoth={filmWaveBoth}
              imgLeft={filmWaveLeft}
              imgRight={filmWaveRight}
            />
          </td>
        </tr>
        <tr>
          <td>
            <SimpleIcon storeKey="diddy" imgUrl={diddyIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="peanut" imgUrl={diddyGunIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="guitar" imgUrl={diddyInstIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="charge" imgUrl={diddyMoveIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="rocket" imgUrl={diddyBarrelIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="spring" imgUrl={diddyPadIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="dive" imgUrl={diveIcon} />
          </td>
          <td>
            <DoubleIcon
              storeLeft="homing"
              storeRight="sniper"
              imgBoth={homeScopeBoth}
              imgLeft={homeScopeLeft}
              imgRight={homeScopeRight}
            />
          </td>
        </tr>
        <tr>
          <td>
            <SimpleIcon storeKey="lanky" imgUrl={lankyIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="grape" imgUrl={lankyGunIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="trombone" imgUrl={lankyInstIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="stand" imgUrl={lankyMoveIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="sprint" imgUrl={lankyBarrelIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="balloon" imgUrl={lankyPadIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="orange" imgUrl={orangeIcon} />
          </td>
          <td>
            <DoubleIcon
              storeLeft="nintendoCoin"
              storeRight="rareCoin"
              imgBoth={companyCoinBoth}
              imgLeft={companyCoinLeft}
              imgRight={companyCoinRight}
            />
          </td>
        </tr>
        <tr>
          <td>
            <SimpleIcon storeKey="tiny" imgUrl={tinyIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="feather" imgUrl={tinyGunIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="sax" imgUrl={tinyInstIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="twirl" imgUrl={tinyMoveIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="mini" imgUrl={tinyBarrelIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="port" imgUrl={tinyPadIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="vine" imgUrl={vineIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="bean" imgUrl={beanIcon} />
          </td>
        </tr>
        <tr>
          <td>
            <SimpleIcon storeKey="chunky" imgUrl={chunkyIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="pineapple" imgUrl={chunkyGunIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="triangle" imgUrl={chunkyInstIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="punch" imgUrl={chunkyMoveIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="hunky" imgUrl={chunkyBarrelIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="gone" imgUrl={chunkyPadIcon} />
          </td>
          <td>
            <SimpleIcon storeKey="barrel" imgUrl={barrelIcon} />
          </td>
          <td>
            <CountSelector storeKey="pearls" imgUrl={pearlIcon} maxValue={5} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MoveTable
