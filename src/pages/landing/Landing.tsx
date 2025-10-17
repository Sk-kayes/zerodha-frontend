import OpenAccount from '../../components/OpenAccount';
import Awards from '../../sub-components/landing-page/Awards';
import Education from '../../sub-components/landing-page/Education';
import Hero from '../../sub-components/landing-page/Hero';
import Pricing from '../../sub-components/landing-page/Pricing';
import Stats from '../../sub-components/landing-page/Stats';

const Landing = () => {
  return (
    <div>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  )
}

export default Landing
