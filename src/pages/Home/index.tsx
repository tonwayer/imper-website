import CalculatorSection from "../../components/Home/CalculatorSection"
import HeroSection from "../../components/Home/HeroSection"
import InfraSection from "../../components/Home/InfraSection"
import InstStakerSection from "../../components/Home/InstStakerSection"
import StakeSection from "../../components/Home/StakeSection"
import TeamSection from "../../components/Home/TeamSection"
import ValueSection from "../../components/Home/ValueSection"

const Home = () => {
  return <div className="text-center md:text-left">
    <HeroSection />
    <StakeSection />
    <CalculatorSection />
    <InstStakerSection />
    <InfraSection />
    <ValueSection />
    <TeamSection />
  </div>
}

export default Home
