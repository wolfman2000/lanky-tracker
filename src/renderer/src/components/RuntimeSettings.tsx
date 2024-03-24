import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

const RuntimeSettings: React.FC = () => {
  const [forestDusk, galleonHighTide, setSetting] = useDonkStore(
    useShallow((state) => [state.forestDusk, state.galleonHighTide, state.setSetting])
  )

  return (
    <section className="runtime-settings">
      <h3>Runtime Settings</h3>
      <div>
        <p>Galleon Starting Tide</p>
        <span onClick={() => setSetting('galleonHighTide', !galleonHighTide)}>
          {galleonHighTide ? '🠱' : '🠳'}
        </span>
        <p>Forest Dusk Active</p>
        <span onClick={() => setSetting('forestDusk', !forestDusk)}>{forestDusk ? '✓' : '✗'}</span>
      </div>
    </section>
  )
}

export default RuntimeSettings
