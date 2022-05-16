import CalculatorSection from "../../components/Home/CalculatorSection"
import HeroSection from "../../components/Home/HeroSection"
import InstStakerSection from "../../components/Home/InstStakerSection"
import StakeSection from "../../components/Home/StakeSection"

const Home = () => {
  return <div className="text-center md:text-left">
    <HeroSection />
    <StakeSection />
    <CalculatorSection />
    <InstStakerSection />
  </div>
}

export default Home
