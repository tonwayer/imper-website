import CalculatorSection from "../../components/Home/CalculatorSection"
import HeroSection from "../../components/Home/HeroSection"
import InfraSection from "../../components/Home/InfraSection"
import InstStakerSection from "../../components/Home/InstStakerSection"
import StakeSection from "../../components/Home/StakeSection"
import ValueSection from "../../components/Home/ValueSection"

const Home = () => {
  return <div className="text-center md:text-left">
    <HeroSection />
    <StakeSection />
    <CalculatorSection />
    <InstStakerSection />
    <InfraSection />
    <ValueSection />
  </div>
}

export default Home
