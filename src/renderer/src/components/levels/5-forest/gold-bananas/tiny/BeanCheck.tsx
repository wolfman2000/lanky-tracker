import { useTinyBeanGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const BeanCheck: React.FC = () => (
  <ForestCheck
    id={5033}
    name="Forest Tiny Top of the Beanstalk"
    region="Forest Center And Beanstalk"
    canGetLogic={useTinyBeanGb()}
  />
)

export default BeanCheck
