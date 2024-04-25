import { useShuffleCrates } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => null

const CrateLocations: React.FC = () => (useShuffleCrates() ? null : <Vanilla />)
export default CrateLocations
