import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatBat, useDefeatKosha } from '@renderer/hooks/enemies'
import {
  useAnyKong,
  useCharge,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useGrape,
  usePeanut,
  usePineapple,
  useSlam
} from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const UndergroundEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const anyKong = useAnyKong()
  const diddy = useDiddy()
  const dk = useDk()
  const kosha = useDefeatKosha()
  const bat = useDefeatBat()
  const peanut = usePeanut()
  const charge = useCharge()
  const pineapple = usePineapple()
  const coconut = useCoconut()
  const slam = useSlam()
  const grape = useGrape()
  const feather = useFeather()
  return (
    <DropPool>
      <CastleCheck
        id={7327}
        name="Castle Enemy: Low Cave Near Crypt"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7328}
        name="Castle Enemy: Low Cave Near Stair Right"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha}
      />
      <CastleCheck
        id={7320}
        name="Castle Enemy: Low Cave Near Stair Left"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7330}
        name="Castle Enemy: Low Cave Near Near Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7331}
        name="Castle Enemy: Low Cave Near Near Funky"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7332}
        name="Castle Enemy: Low Cave Near Near Tag"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7333}
        name="Castle Enemy: Crypt Diddy Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7334}
        name="Castle Enemy: Crypt Diddy Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7335}
        name="Castle Enemy: Crypt Diddy Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7336}
        name="Castle Enemy: Crypt Diddy Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && peanut && charge}
      />
      <CastleCheck
        id={7337}
        name="Castle Enemy: Crypt Chunky Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7338}
        name="Castle Enemy: Crypt Chunky Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7339}
        name="Castle Enemy: Crypt Chunky Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7340}
        name="Castle Enemy: Crypt Chunky Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && pineapple && slam}
      />
      <CastleCheck
        id={7341}
        name="Castle Enemy: Crypt Minecart Entry"
        region="Castle Underground"
        canGetLogic={inStage && coconut}
      />
      <CastleCheck
        id={7342}
        name="Castle Enemy: Crypt Fork"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple)}
      />
      <CastleCheck
        id={7343}
        name="Castle Enemy: Crypt Near Diddy"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple)}
      />
      <CastleCheck
        id={7344}
        name="Castle Enemy: Crypt Near Chunky"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple)}
      />
      <CastleCheck
        id={7345}
        name="Castle Enemy: Mausoleum Tiny"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape)}
      />
      <CastleCheck
        id={7346}
        name="Castle Enemy: Mausoleum Lanky Switch"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape)}
      />
      <CastleCheck
        id={7347}
        name="Castle Enemy: Mausoleum Lanky Gate"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape)}
      />
      <CastleCheck
        id={7348}
        name="Castle Enemy: Upper Cave Near Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />

      <CastleCheck
        id={7350}
        name="Castle Enemy: Upper Cave Near Pit"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat}
      />
      <CastleCheck
        id={7351}
        name="Castle Enemy: Upper Cave Near Entrance"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7319}
        name="Castle Enemy: Dungeon Face Room"
        region="Castle Underground"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7320}
        name="Castle Enemy: Dungeon Chair Room"
        region="Castle Underground"
        canGetLogic={inStage && diddy && canSlam && kosha}
      />
      <CastleCheck
        id={7321}
        name="Castle Enemy: Dungeon Outside Lanky Room"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha}
      />
    </DropPool>
  )
}

export default UndergroundEnemies
