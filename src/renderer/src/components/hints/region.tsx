import { ChangeEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { SelectableRegionValues, SelectableRegions } from '@renderer/store/common'

type FoolishLocation = {
  id: string
}

const genDropDowns = (): JSX.Element[] => {
  return SelectableRegions.map((r) => {
    return <option key={r}>{r}</option>
  })
}

const FoolishDropDown: React.FC<FoolishLocation> = (props) => {
  const [foolChecks, hoardChecks, setFool, setHoard, clearRegion] = useDonkStore(
    useShallow((state) => [
      state.foolish,
      state.hoard,
      state.setFool,
      state.setHoard,
      state.clearRegion
    ])
  )
  const foolCheck = foolChecks[props.id] ?? ''
  const hoardCheck = hoardChecks[props.id] ?? ''
  const display =
    foolCheck === '' && hoardCheck === '' ? 'NONE' : hoardCheck !== '' ? 'PATH' : 'FOOL'

  const checkLabel = foolChecks[props.id] ?? hoardChecks[props.id] ?? ''

  const onChangeDropDown = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as SelectableRegionValues
    if (value === '') {
      clearRegion(props.id)
    } else if (display === 'PATH') {
      setHoard(props.id, value)
    } else {
      setFool(props.id, value)
    }
  }

  const onTypeClick = (): void => {
    if (display === 'PATH') {
      setFool(props.id, hoardChecks[props.id])
    } else if (display === 'FOOL') {
      setHoard(props.id, foolChecks[props.id])
    }
  }

  return (
    <>
      <select id={props.id} value={checkLabel} onChange={onChangeDropDown}>
        {genDropDowns()}
      </select>
      <p onClick={onTypeClick}>{display}</p>
    </>
  )
}

export default FoolishDropDown
