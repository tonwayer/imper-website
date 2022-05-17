import TeamMember from "../TeamMember"

const TeamSection = () => {

  return <section className="mt-[270px]">
    <div className="text-center max-w-md mx-auto mb-10 mt-24">
      <h4 className="font-bold text-md text-primary-500 font-inter mb-2">
        Discover
      </h4>
      <h3 className="font-bold text-[45px] leading-[64px] mb-2">
        Our team
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
      </p>
    </div>
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
