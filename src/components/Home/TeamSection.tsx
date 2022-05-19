import TeamMember from "../TeamMember"
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const TeamSection = () => {

  return <section className="mt-[270px]">
    <div className="text-center max-w-md mx-auto mb-20 mt-24">
      <h4 className="font-bold text-md text-primary-500 font-inter mb-2">
        Discover
      </h4>
      <h3 className="font-bold text-[45px] leading-[52px] mb-1">
        Our Team
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
      </p>
    </div>
    <Carousel showStatus={false} className="block md:hidden">
        <TeamMember
          name="Dilan Asatekin"
          role="Founder"
          position="Data Engeineer/Scientist"
          className="mx-auto" 
        />
        <TeamMember
          name="Dilan Asatekin"
          role="Founder"
          position="Data Engeineer/Scientist"
          className="mx-auto" 
        />
        <TeamMember
          name="Dilan Asatekin"
          role="Founder"
          position="Data Engeineer/Scientist"
          className="mx-auto" 
        />
        <TeamMember
          name="Dilan Asatekin"
          role="Founder"
          position="Data Engeineer/Scientist"
          className="mx-auto" 
        />
        <TeamMember
          name="Dilan Asatekin"
          role="Founder"
          position="Data Engeineer/Scientist"
          className="mx-auto" 
        />
    </Carousel>
    <div className="hidden md:block">
      <div className="flex justify-center">
        <div className="mr-10">
          <TeamMember name="Dilan Asatekin" role="Founder" position="Data Engeineer/Scientist" />
        </div>
        <div className="mr-10">
          <TeamMember name="Dilan Asatekin" role="Founder" position="Data Engeineer/Scientist" />
        </div>
        <TeamMember name="Dilan Asatekin" role="Founder" position="Data Engeineer/Scientist" />
      </div>
      <div className="flex justify-center mt-11">
        <div className="mr-10">
          <TeamMember name="Dilan Asatekin" role="Founder" position="Data Engeineer/Scientist" />
        </div>
        <TeamMember name="Dilan Asatekin" role="Founder" position="Data Engeineer/Scientist" />
      </div>
    </div>
  </section>
}

export default TeamSection
