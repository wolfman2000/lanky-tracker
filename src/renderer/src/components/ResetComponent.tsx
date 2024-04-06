import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { Preset } from '@renderer/store/common'
import { useState } from 'react'

const ResetTracker: React.FC = () => {
  const assignPreset = useDonkStore(useShallow((state) => state.setPreset))
  const [preset, setPreset] = useState<Preset>('beginner')

  const handlePreset = (val: Preset): void => {
    setPreset(val)
  }

  return (
    <section className="reset">
      <select
        id="preset-options"
        value={preset}
        onChange={(e) => handlePreset(e.currentTarget.value as Preset)}
      >
        <option value="beginner">Beginner Settings</option>
        <option value="s2">Season 2 Race Settings</option>
        <option value="sandbox">Sandbox Mode</option>
        <option value="balancedLzr">Balanced LZR</option>
        <option value="nsak">No Style, All Keys</option>
        <option value="anotherDay">Another Day</option>
        <option value="hitlist">Hitlist</option>
        <option value="treasureHurry">Treasure Hurry</option>
        <option value="kevin">KEVIN</option>
        <option value="bountyHunter">Bounty Hunter (revven)</option>
        <option value="radicalSlo">S3 Test: Radical SLO</option>
        <option value="s3allKeys">S3 Test: All Keys</option>
      </select>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          assignPreset(preset)
        }}
      >
        Initialize Preset
      </button>
    </section>
  )
}

export default ResetTracker
