import CalculatorSection from "../../components/Home/CalculatorSection"
import HeroSection from "../../components/Home/HeroSection"
import StakeSection from "../../components/Home/StakeSection"

const Home = () => {
  return <div className="text-center md:text-left">
    <HeroSection />
    <StakeSection />
    <CalculatorSection />
  </div>
}

export default Home
