import useDonkStore from '@renderer/store'

export const useKey1 = (): boolean => {
  const key = useDonkStore((state) => state.key1)
  return key
}

export const useKey2 = (): boolean => {
  const key = useDonkStore((state) => state.key2)
  return key
}

export const useKey3 = (): boolean => {
  const key = useDonkStore((state) => state.key3)
  return key
}

export const useKey4 = (): boolean => {
  const key = useDonkStore((state) => state.key4)
  return key
}

export const useKey5 = (): boolean => {
  const key = useDonkStore((state) => state.key5)
  return key
}

export const useKey6 = (): boolean => {
  const key = useDonkStore((state) => state.key6)
  return key
}

export const useKey7 = (): boolean => {
  const key = useDonkStore((state) => state.key7)
  return key
}

export const useKey8 = (): boolean => {
  const key = useDonkStore((state) => state.key8)
  return key
}

export const useLevel1 = (): string => {
  const level = useDonkStore((state) => state.level1)
  return level
}

export const useLevel2 = (): string => {
  const level = useDonkStore((state) => state.level2)
  return level
}

export const useLevel3 = (): string => {
  const level = useDonkStore((state) => state.level3)
  return level
}

export const useLevel4 = (): string => {
  const level = useDonkStore((state) => state.level4)
  return level
}

export const useLevel5 = (): string => {
  const level = useDonkStore((state) => state.level5)
  return level
}

export const useLevel6 = (): string => {
  const level = useDonkStore((state) => state.level6)
  return level
}

export const useLevel7 = (): string => {
  const level = useDonkStore((state) => state.level7)
  return level
}

export const useLevel8 = (): string => {
  const level = useDonkStore((state) => state.level8)
  return level
}
