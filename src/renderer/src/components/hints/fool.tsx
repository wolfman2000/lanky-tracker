import useDonkStore from '@renderer/store'
import { SelectableRegionValues, SelectableRegions } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

type FoolishLocation = {
  id: string
}

const genDropDowns = (): JSX.Element[] => {
  return SelectableRegions.map((r) => {
    return <option key={r}>{r}</option>
  })
}

const FoolishDropDown: React.FC<FoolishLocation> = (props) => {
  const [checks, setFool] = useDonkStore(useShallow((state) => [state.foolish, state.setFool]))
  const check = checks[props.id] ?? ''

  return (
    <>
      <select
        id={`fool-{check}`}
        value={check}
        onChange={(e) => setFool(props.id, e.target.value as SelectableRegionValues)}
      >
        {genDropDowns()}
      </select>
    </>
  )
}

export default FoolishDropDown
