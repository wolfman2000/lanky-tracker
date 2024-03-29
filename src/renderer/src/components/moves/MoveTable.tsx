import CountSelector from '../settings/CountSelector'
import DoubleIcon from './DoubleIcon'
import SimpleIcon from '../settings/SimpleIcon'
import SlamSelector from './SlamSelector'

import chunkyIcon from '../../assets/images/chunky.png'
import chunkyGunIcon from '../../assets/images/chunky_gun.png'
import chunkyInstIcon from '../../assets/images/chunky_inst.png'
import chunkyMoveIcon from '../../assets/images/chunky_move.png'
import chunkyBarrelIcon from '../../assets/images/chunkybarrel.png'
import chunkyPadIcon from '../../assets/images/chunkypad.png'
import diddyIcon from '../../assets/images/diddy.png'
import diddyGunIcon from '../../assets/images/diddy_gun.png'
import diddyInstIcon from '../../assets/images/diddy_inst.png'
import diddyMoveIcon from '../../assets/images/diddy_move.png'
import diddyBarrelIcon from '../../assets/images/diddybarrel.png'
import diddyPadIcon from '../../assets/images/diddypad.png'
import dkIcon from '../../assets/images/dk.png'
import dkGunIcon from '../../assets/images/dk_gun.png'
import dkInstIcon from '../../assets/images/dk_inst.png'
import dkMoveIcon from '../../assets/images/dk_move.png'
import dkBarrelIcon from '../../assets/images/dkbarrel.png'
import dkPadIcon from '../../assets/images/dkpad.png'
import lankyIcon from '../../assets/images/lanky.png'
import lankyGunIcon from '../../assets/images/lanky_gun.png'
import lankyInstIcon from '../../assets/images/lanky_inst.png'
import lankyMoveIcon from '../../assets/images/lanky_move.png'
import lankyBarrelIcon from '../../assets/images/lankybarrel.png'
import lankyPadIcon from '../../assets/images/lankypad.png'
import tinyIcon from '../../assets/images/tiny.png'
import tinyGunIcon from '../../assets/images/tiny_gun.png'
import tinyInstIcon from '../../assets/images/tiny_inst.png'
import tinyMoveIcon from '../../assets/images/tiny_move.png'
import tinyBarrelIcon from '../../assets/images/tinybarrel.png'
import tinyPadIcon from '../../assets/images/tinypad.png'

import barrelIcon from '../../assets/images/barrel2.png'
import diveIcon from '../../assets/images/diving.png'
import orangeIcon from '../../assets/images/orange.png'
import vineIcon from '../../assets/images/vine.png'

import filmWaveBoth from '../../assets/images/filmwave.png'
import filmWaveLeft from '../../assets/images/filmwave1.png'
import filmWaveRight from '../../assets/images/filmwave2.png'

import homeScopeBoth from '../../assets/images/homingscope.png'
import homeScopeLeft from '../../assets/images/homingscope1.png'
import homeScopeRight from '../../assets/images/homingscope2.png'

import companyCoinBoth from '../../assets/images/n64rw_coin.png'
import companyCoinRight from '../../assets/images/n64rw_coin_n64bw.png'
import companyCoinLeft from '../../assets/images/n64rw_coin_rwbw.png'

import goldBananaIcon from '../../assets/images/GB.png'
import bananaMedalIcon from '../../assets/images/bananamedal.png'
import beanIcon from '../../assets/images/bean.png'
import crownIcon from '../../assets/images/crown.png'
import fairyIcon from '../../assets/images/fairy.png'
import pearlIcon from '../../assets/images/pearl.png'
import rainbowCoinICon from '../../assets/images/rainbowcoin.png'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const MoveTable = (): JSX.Element => {
  const [setMove, setConsumable] = useDonkStore(
    useShallow((state) => [state.setMove, state.setConsumable])
  )
  return (
    <section className="move-table">
      <SimpleIcon storeKey="dk" imgUrl={dkIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="coconut" imgUrl={dkGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="bongos" imgUrl={dkInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="grab" imgUrl={dkMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="strong" imgUrl={dkBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="blast" imgUrl={dkPadIcon} prefix="moves" updateItem={setMove} />
      <SlamSelector />
      <DoubleIcon
        storeLeft="camera"
        storeRight="shockwave"
        imgBoth={filmWaveBoth}
        imgLeft={filmWaveLeft}
        imgRight={filmWaveRight}
        prefix="moves"
        setItem={setMove}
      />
      <CountSelector
        storeKey="crowns"
        imgUrl={crownIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={10}
      />
      <SimpleIcon storeKey="diddy" imgUrl={diddyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="peanut" imgUrl={diddyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="guitar" imgUrl={diddyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="charge" imgUrl={diddyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="rocket" imgUrl={diddyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="spring" imgUrl={diddyPadIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="dive" imgUrl={diveIcon} prefix="moves" updateItem={setMove} />
      <DoubleIcon
        storeLeft="homing"
        storeRight="sniper"
        imgBoth={homeScopeBoth}
        imgLeft={homeScopeLeft}
        imgRight={homeScopeRight}
        prefix="moves"
        setItem={setMove}
      />
      <CountSelector
        storeKey="bananaMedals"
        imgUrl={bananaMedalIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={40}
      />
      <SimpleIcon storeKey="lanky" imgUrl={lankyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="grape" imgUrl={lankyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="trombone" imgUrl={lankyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="stand" imgUrl={lankyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="sprint" imgUrl={lankyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="balloon" imgUrl={lankyPadIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="orange" imgUrl={orangeIcon} prefix="moves" updateItem={setMove} />
      <DoubleIcon
        storeLeft="nintendoCoin"
        storeRight="rareCoin"
        imgBoth={companyCoinBoth}
        imgLeft={companyCoinLeft}
        imgRight={companyCoinRight}
        prefix="consumables"
        setItem={setConsumable}
      />
      <CountSelector
        storeKey="rainbowCoins"
        imgUrl={rainbowCoinICon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={16}
      />
      <SimpleIcon storeKey="tiny" imgUrl={tinyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="feather" imgUrl={tinyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="sax" imgUrl={tinyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="twirl" imgUrl={tinyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="mini" imgUrl={tinyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="port" imgUrl={tinyPadIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="vine" imgUrl={vineIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon
        storeKey="bean"
        imgUrl={beanIcon}
        prefix="consumables"
        updateItem={setConsumable}
      />
      <CountSelector
        storeKey="fairies"
        imgUrl={fairyIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={20}
      />
      <SimpleIcon storeKey="chunky" imgUrl={chunkyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="pineapple" imgUrl={chunkyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="triangle" imgUrl={chunkyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="punch" imgUrl={chunkyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="hunky" imgUrl={chunkyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="gone" imgUrl={chunkyPadIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="barrel" imgUrl={barrelIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="pearls"
        imgUrl={pearlIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={5}
      />
      <CountSelector
        storeKey="goldBananas"
        imgUrl={goldBananaIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={201}
      />
    </section>
  )
}

export default MoveTable
