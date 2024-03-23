import { resetAllSlices } from '@renderer/store/common'

const ResetTracker: React.FC = () => {
  return (
    <section>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          resetAllSlices()
        }}
      >
        Reset Tracker
      </button>
    </section>
  )
}

export default ResetTracker
