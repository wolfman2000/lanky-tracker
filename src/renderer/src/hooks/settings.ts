import useDonkStore from '@renderer/store'

export const useCbCount = (): number => {
  const setting = useDonkStore((state) => state.settings.cbCount)
  return setting
}
