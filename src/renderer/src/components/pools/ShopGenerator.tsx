import { useShallow } from 'zustand/react/shallow'

import { useDk, useDiddy, useLanky, useTiny, useChunky, useAnyKong } from '@renderer/hooks/kongs'
import { Level, SelectableRegionValues } from '@renderer/store/common'
import ItemCheck from '../levels/ItemCheck'
import useDonkStore from '@renderer/store'

type ShopGeneratorProps = {
  baseId: number
  baseName: string
  level: Level
  region: SelectableRegionValues
  inLogic: boolean
  outLogic?: boolean
}

const useShopLogic = (id: number): boolean => {
  const dk = useDk()
  const diddy = useDiddy()
  const lanky = useLanky()
  const tiny = useTiny()
  const chunky = useChunky()
  const anyKong = useAnyKong()
  switch (id % 10) {
    case 1:
      return dk
    case 2:
      return diddy
    case 3:
      return lanky
    case 4:
      return tiny
    case 5:
      return chunky
    default:
      return anyKong
  }
}

const useShopKong = (id: number): string => {
  switch (id % 10) {
    case 1:
      return 'Donkey'
    case 2:
      return 'Diddy'
    case 3:
      return 'Lanky'
    case 4:
      return 'Tiny'
    case 5:
      return 'Chunky'
    default:
      return 'Shared'
  }
}

const SingleShopCheck: React.FC<ShopGeneratorProps> = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks))
  const kongBool = useShopLogic(props.baseId)
  const kongName = useShopKong(props.baseId)
  let { outLogic } = props
  if (outLogic === undefined) {
    outLogic = props.inLogic
  }

  return (
    <ItemCheck
      id={props.baseId}
      level={props.level}
      region={props.region}
      name={`${props.baseName} ${kongName}`}
      canGetLogic={props.inLogic && kongBool}
      canGetBreak={outLogic && kongBool}
      done={checks[props.baseId]}
    />
  )
}

const ShopGenerator: React.FC<ShopGeneratorProps> = (props) => {
  const children: JSX.Element[] = [...Array(6).keys()].map((x) => {
    return <SingleShopCheck key={props.baseId + x} {...props} baseId={props.baseId + x} />
  })

  return <>{children}</>
}

export default ShopGenerator
