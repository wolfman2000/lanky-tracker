import SimpleKey from '@renderer/components/SimpleKey'
import LevelSelector from './LevelSelector'

import l1 from '../assets/images/1.png'
import l2 from '../assets/images/2.png'
import l3 from '../assets/images/3.png'
import l4 from '../assets/images/4.png'
import l5 from '../assets/images/5.png'
import l6 from '../assets/images/6.png'
import l7 from '../assets/images/7.png'
import l8 from '../assets/images/8.png'

const LevelTable = (): JSX.Element => {
  return (
    <>
      <section className="level-list">
        <section className="level1">
          <img src={l1} height={24} />
          <LevelSelector storeKey="level1" />
          <SimpleKey keyNum={1} />
        </section>
        <section className="level2">
          <img src={l2} height={24} />
          <LevelSelector storeKey="level2" />
          <SimpleKey keyNum={2} />
        </section>
        <section className="level3">
          <img src={l3} height={24} />
          <LevelSelector storeKey="level3" />
          <SimpleKey keyNum={3} />
        </section>
        <section className="level4">
          <img src={l4} height={24} />
          <LevelSelector storeKey="level4" />
          <SimpleKey keyNum={4} />
        </section>
        <section className="level5">
          <img src={l5} height={24} />
          <LevelSelector storeKey="level5" />
          <SimpleKey keyNum={5} />
        </section>
        <section className="level6">
          <img src={l6} height={24} />
          <LevelSelector storeKey="level6" />
          <SimpleKey keyNum={6} />
        </section>
        <section className="level7">
          <img src={l7} height={24} />
          <LevelSelector storeKey="level7" />
          <SimpleKey keyNum={7} />
        </section>
        <section className="level8">
          <img src={l8} height={24} />
          <LevelSelector storeKey="level8" />
          <SimpleKey keyNum={8} />
        </section>
      </section>
    </>
  )
}

export default LevelTable
